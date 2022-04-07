import * as dom from "dts-dom"
import { TypeSources } from "./load-sources.js"
import { aggregateFunctions } from "./type-aggregation.js"
import { extractTypes } from "./type-extraction.js"
import { TypeSourceFunction, TypeSourceType } from "./type-sources/types.js"

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

const typeMap: Record<TypeSourceType, dom.Type> = {
    "any": dom.type.any,
    "nil": dom.type.undefined,

    "string": dom.type.string,
    "char": dom.type.string,
    "std::string": dom.type.string,
    "locstring": dom.type.string,

    "object": dom.type.any,

    "number": dom.type.number,
    "real": dom.type.number,
    "integer": dom.type.number,
    "int": dom.type.number,
    "float": dom.type.number,
    "unsigned": dom.type.number,
    "real (id)": dom.type.number,
    ["Real --> R_ENEMY, R_ALLY, R_NEUTRAL, R_UNDEFINED, or nil (if world owned or invalid parameters)".toLowerCase()]: dom.type.number,

    "void": dom.type.void,

    "boolean": dom.type.boolean,
    "bool": dom.type.boolean,

    "player": { kind: "name", name: "Player", typeArguments: [] },

    "position": { kind: "name", name: "Position", typeArguments: [] },
    "scarposition": { kind: "name", name: "Position", typeArguments: [] },
    "scarpos": { kind: "name", name: "Position", typeArguments: [] },
    "pos": { kind: "name", name: "Position", typeArguments: [] },
    "postion": { kind: "name", name: "Position", typeArguments: [] },
    "positon": { kind: "name", name: "Position", typeArguments: [] },
    ["Position, if y-height is nil, y-height = ground height, terrain ground or walkable".toLowerCase()]: { kind: "name", name: "Position", typeArguments: [] },

    "entity": { kind: "name", name: "EntityID", typeArguments: [] },

    ["EntityID or SquadID id of the destination".toLowerCase()]: dom.create.union([
        { kind: "name", name: "EntityID", typeArguments: [] },
        { kind: "name", name: "SquadID", typeArguments: [] }
    ]),

    "table": dom.type.any,
    "luatable": dom.type.any,
    "lua table": dom.type.any,

    "function": dom.type.any,
    "luafunction": dom.type.any,
    "func": dom.type.any,
    "scarfn": dom.type.any,
}

const createTypeReference = (type: TypeSourceType, typeSpellings: Record<TypeSourceType, TypeSourceType>): dom.Type => {
    type = potentiallyRenameType(type)

    const typeKey = type.toLowerCase()
    if (typeKey in typeMap) {
        return typeMap[typeKey]
    }

    if (type.includes("/")) {
        return dom.create.union(type.split("/").map(subType => createTypeReference(subType, typeSpellings)))
    }

    if (typeKey in typeSpellings) {
        type = typeSpellings[typeKey]
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


const createFunctionDeclaration = (fn: TypeSourceFunction, typeSpellings: Record<TypeSourceType, TypeSourceType>): dom.TopLevelDeclaration => {
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
        const param = dom.create.parameter(paramName, createTypeReference(fnParam.type, typeSpellings))
        if (optional || fnParam.optional === true || paramName.toLocaleLowerCase().startsWith("opt_")) {
            param.flags = dom.ParameterFlags.Optional
            optional = true
        }
        params.push(param)
        existingParamNames.add(paramName)
    }

    if (fn.class) {
        const clsDecl = dom.create.interface(
            fn.class,
        )
        const methodDecl = dom.create.method(fn.name, params, createTypeReference(fn.returnType, typeSpellings))
        methodDecl.jsDocComment = fn.documentation
        clsDecl.members.push(methodDecl)
        return clsDecl
    } else {
        const fnDecl = dom.create.function(
            fn.name,
            params,
            createTypeReference(fn.returnType, typeSpellings)
        )
        fnDecl.jsDocComment = fn.documentation
        return fnDecl
    }
}

const getExtraTypeDeclarations = (): dom.TopLevelDeclaration[] => {
    const extra: dom.TopLevelDeclaration[] = []

    const positionInterface = dom.create.interface("Position")
    positionInterface.members.push(dom.create.property("x", "number"))
    positionInterface.members.push(dom.create.property("y", "number"))
    positionInterface.members.push(dom.create.property("z", "number"))
    extra.push(positionInterface)

    const entityIdInterface = dom.create.interface("EntityID")
    entityIdInterface.members.push(dom.create.property("EntityID", "number"))
    extra.push(entityIdInterface)

    const playerIdInterface = dom.create.interface("Player")
    playerIdInterface.members.push(dom.create.property("id", { kind: "name", name: "PlayerID", typeArguments: [] }))
    extra.push(playerIdInterface)

    const locStringInterface = dom.create.interface("LocString")
    locStringInterface.members.push(dom.create.property("LocString", "string"))
    extra.push(locStringInterface)

    return extra
}


const createTypeDeclaration = (type: TypeSourceType, ignoreTypeDeclarations: Set<string>): dom.ModuleMember[] => {
    type = potentiallyRenameType(type)

    const typeKey = type.toLowerCase()
    if (ignoreTypeDeclarations.has(typeKey)) {
        return []
    }

    if (type.includes("/")) {
        return type.split("/").flatMap(t => createTypeDeclaration(t, ignoreTypeDeclarations))
    }

    return [dom.create.interface(type)]
}



const getTypeDeclarations = (sources: TypeSources, ignoreTypeDeclarations: Set<string>, aggregatedFunctions: TypeSourceFunction[]): dom.TopLevelDeclaration[] => {
    const enumNames = new Set<string>(sources.aoe4Enums.map(e => e.name.toLowerCase()))

    const types = new Set<string>(aggregatedFunctions.flatMap(fn => [
        fn.returnType,
        ...fn.parameters.map(param => param.type).filter(t => !(t.toLowerCase() in enumNames)),
    ]))
    return [...types].flatMap(t => createTypeDeclaration(t, ignoreTypeDeclarations))
}

const getEnumDeclarations = (sources: TypeSources): dom.TopLevelDeclaration[] => {
    return sources.aoe4Enums.map(e => {
        const enumDecl = dom.create.enum(e.name)
        const addedMembers = new Set<string>()
        for (const enumMember of e.members) {
            if (!addedMembers.has(enumMember.name)) {
                enumDecl.members.push(dom.create.enumValue(enumMember.name))
                addedMembers.add(enumMember.name)
            }
        }
        enumDecl.jsDocComment = "@compileMembersOnly"
        return enumDecl
    })
}

function getIgnoredTypeDeclarations(sources: TypeSources): Set<string> {
    return new Set<string>([
        ...Object.keys(typeMap),
        ...sources.aoe4Enums.map(e => e.name.toLowerCase()),
        "any",
        "player",
        "entityid",
        "locstring",
    ])
}

export function createDts(sources: TypeSources): dom.TopLevelDeclaration[] {
    const aggregatedFunctions = aggregateFunctions(sources)

    const extractedTypes = extractTypes({
        functions: aggregatedFunctions,
        enums: sources.aoe4Enums,
    })

    const enumTypesLower = new Set(sources.aoe4Enums.map(e => e.name.toLowerCase()))
    const ignoreTypeDeclarations = getIgnoredTypeDeclarations(sources)

    const newTypes = extractedTypes.filter(
        type => !(enumTypesLower.has(type.toLowerCase())) && !(ignoreTypeDeclarations.has(type.toLowerCase()))
    )

    const members: dom.TopLevelDeclaration[] = []

    const typeDecls = getEnumDeclarations(sources)
        .concat(getExtraTypeDeclarations())
        .concat(newTypes.map(type => dom.create.interface(type)))

    const typeSpellings = Object.fromEntries(extractedTypes.map(type => [type.toLowerCase(), type]))

    aggregatedFunctions.map(fn => createFunctionDeclaration(fn, typeSpellings)).forEach(fn => members.push(fn))

    for (const typeDecl of typeDecls) {
        members.push(typeDecl)
    }

    return members
}