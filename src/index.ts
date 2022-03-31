import * as dtsDom from "dts-dom"
import fs from "fs/promises"
import { makeScarDocsEnumTypeSource, makeScarDocsFunctionTypeSource } from "./type-sources/scardocs.js"
import { TypeSourceFunction, TypeSourceType } from "./type-sources/types.js"

const aoe4FunctionsHtml = await fs.readFile("data/aoe4-scardocs/function_list.htm", "utf-8")
const aoe4EnumsHtml = await fs.readFile("data/aoe4-scardocs/enum_list.htm", "utf-8")
const coh2FunctionsHtml = await fs.readFile("data/coh2-scardocs/function_list.htm", "utf-8")

const parsedFunctions = makeScarDocsFunctionTypeSource(aoe4FunctionsHtml).getFunctions()
const parsedEnums = makeScarDocsEnumTypeSource(aoe4EnumsHtml).getEnums()
const coh2Functions = makeScarDocsFunctionTypeSource(coh2FunctionsHtml).getFunctions()

const coh2FunctionMap = Object.fromEntries(coh2Functions.map(fn => [fn.name, fn]))

for (let i = 0; i < parsedFunctions.length; i++) {
    const fnName = parsedFunctions[i].name
    if (fnName in coh2FunctionMap) {
        parsedFunctions[i] = coh2FunctionMap[fnName]
    }
}

const typeRenames: Record<TypeSourceType, TypeSourceType> = {
    "": "any",
}

function potentiallyRenameType(type: TypeSourceType): TypeSourceType {
    const typeKey = type.toLowerCase()
    if (typeKey in typeRenames) {
        type = typeRenames[typeKey]
    }

    if (!/^[a-z_]/.test(type.toLowerCase())) {
        type = `_${type}`
    }

    type = type.replace("OPT_", "")
    return `${type[0].toUpperCase()}${type.slice(1)}`
}

const typeMap: Record<TypeSourceType, dtsDom.Type> = {
    "any": dtsDom.type.any,

    "string": dtsDom.type.string,
    "char": dtsDom.type.string,
    "std::string": dtsDom.type.string,

    "number": dtsDom.type.number,
    "real": dtsDom.type.number,
    "integer": dtsDom.type.number,
    "int": dtsDom.type.number,
    "float": dtsDom.type.number,
    "unsigned": dtsDom.type.number,
    "real (id)": dtsDom.type.number,
    ["Real --> R_ENEMY, R_ALLY, R_NEUTRAL, R_UNDEFINED, or nil (if world owned or invalid parameters)".toLowerCase()]: dtsDom.type.number,

    "void": dtsDom.type.void,

    "boolean": dtsDom.type.boolean,
    "bool": dtsDom.type.boolean,

    "position": { kind: "name", name: "Position", typeArguments: [] },
    "scarposition": { kind: "name", name: "Position", typeArguments: [] },
    "scarpos": { kind: "name", name: "Position", typeArguments: [] },
    "pos": { kind: "name", name: "Position", typeArguments: [] },
    "postion": { kind: "name", name: "Position", typeArguments: [] },
    "positon": { kind: "name", name: "Position", typeArguments: [] },
    ["Position, if y-height is nil, y-height = ground height, terrain ground or walkable".toLowerCase()]: { kind: "name", name: "Position", typeArguments: [] },

    "entity": { kind: "name", name: "EntityID", typeArguments: [] },

    "player": { kind: "name", name: "PlayerID", typeArguments: [] },

    ["EntityID or SquadID id of the destination".toLowerCase()]: dtsDom.create.union([
        { kind: "name", name: "EntityID", typeArguments: [] },
        { kind: "name", name: "SquadID", typeArguments: [] }
    ]),

    "table": dtsDom.type.any,
    "lua table": dtsDom.type.any,

    "function": dtsDom.type.any,
    "luafunction": dtsDom.type.any,
    "func": dtsDom.type.any,
    "scarfn": dtsDom.type.any,
}

const ignoreTypeDeclarations: Set<string> = new Set<string>([
    ...Object.keys(typeMap),
    ...parsedEnums.map(e => e.name.toLowerCase()),
    "any",
    "playerid",
    "entityid",
    "locstring",
])

const createTypeReference = (type: TypeSourceType): dtsDom.Type => {
    type = potentiallyRenameType(type)

    const typeKey = type.toLowerCase()
    if (typeKey in typeMap) {
        return typeMap[typeKey]
    }

    if (type.includes("/")) {
        return dtsDom.create.union(type.split("/").map(createTypeReference))
    }

    return { kind: "name", name: type, typeArguments: [] }
}

function replaceIllegalNames(name: string): string {
    switch (name) {
        case "var":
            return "var_"
        case "in":
            return "in_"
        case "function":
            return "function_"
        case "with":
            return "with_"
        case "of":
            return "of_"
        case "for":
            return "for_"
    }

    return name
}

const createFunctionDeclaration = (fn: TypeSourceFunction): dtsDom.FunctionDeclaration => {
    const params = []
    const existingParamNames = new Set<string>()

    let optional = false
    for (const fnParam of fn.parameters) {
        const origParamName = replaceIllegalNames(fnParam.name)
        let n = 2
        let paramName = origParamName
        while (existingParamNames.has(paramName)) {
            paramName = `${origParamName}${n++}`
        }
        const param = dtsDom.create.parameter(paramName, createTypeReference(fnParam.type))
        if (optional || paramName.toLocaleLowerCase().startsWith("opt_")) {
            param.flags = dtsDom.ParameterFlags.Optional
            optional = true
        }
        params.push(param)
        existingParamNames.add(paramName)
    }

    const fnDecl = dtsDom.create.function(
        fn.name,
        params,
        createTypeReference(fn.returnType)
    )
    fnDecl.jsDocComment = fn.documentation
    return fnDecl
}

const members: dtsDom.TopLevelDeclaration[] = []
parsedFunctions.map(createFunctionDeclaration).forEach(fn => members.push(fn))

const createTypeDeclaration = (type: TypeSourceType): dtsDom.ModuleMember[] => {
    type = potentiallyRenameType(type)

    const typeKey = type.toLowerCase()
    if (ignoreTypeDeclarations.has(typeKey)) {
        return []
    }

    if (type.includes("/")) {
        return type.split("/").flatMap(createTypeDeclaration)
    }

    return [dtsDom.create.interface(type)]
}

const getExtraTypeDeclarations = (): dtsDom.TopLevelDeclaration[] => {
    const extra: dtsDom.TopLevelDeclaration[] = []

    const positionInterface = dtsDom.create.interface("Position")
    positionInterface.members.push(dtsDom.create.property("x", "number"))
    positionInterface.members.push(dtsDom.create.property("y", "number"))
    positionInterface.members.push(dtsDom.create.property("z", "number"))
    extra.push(positionInterface)

    const entityIdInterface = dtsDom.create.interface("EntityID")
    entityIdInterface.members.push(dtsDom.create.property("EntityID", "number"))
    extra.push(entityIdInterface)

    const playerIdInterface = dtsDom.create.interface("PlayerID")
    playerIdInterface.members.push(dtsDom.create.property("PlayerID", "number"))
    extra.push(playerIdInterface)

    const locStringInterface = dtsDom.create.interface("LocString")
    locStringInterface.members.push(dtsDom.create.property("LocString", "string"))
    extra.push(locStringInterface)

    return extra
}

const getTypeDeclarations = (): dtsDom.TopLevelDeclaration[] => {
    const enumNames = new Set<string>(parsedEnums.map(e => e.name.toLowerCase()))

    const types = new Set<string>(parsedFunctions.flatMap(fn => [
        fn.returnType,
        ...fn.parameters.map(param => param.type).filter(t => !(t.toLowerCase() in enumNames)),
    ]))
    return [...types].flatMap(createTypeDeclaration)
}

const getEnumDeclarations = (): dtsDom.TopLevelDeclaration[] => {
    return parsedEnums.map(e => {
        const enumDecl = dtsDom.create.enum(e.name)
        const addedMembers = new Set<string>()
        for (const enumMember of e.members) {
            if (!addedMembers.has(enumMember.name)) {
                enumDecl.members.push(dtsDom.create.enumValue(enumMember.name))
                addedMembers.add(enumMember.name)
            }
        }
        enumDecl.jsDocComment = "@compileMembersOnly"
        return enumDecl
    })
}

for (const typeDecl of getEnumDeclarations()
    .concat(getExtraTypeDeclarations())
    .concat(getTypeDeclarations())) {
    members.push(typeDecl)
}

const dts = members.map(member => dtsDom.emit(member)).join("")

await fs.writeFile("packages/aoetypes/types/aoetypes.d.ts", dts)