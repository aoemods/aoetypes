import { HTMLElement, NodeType, parse } from "node-html-parser"
import { TypeSourceEnum, TypeSourceEnumMember, TypeSourceFunction, TypeSourceParameter } from "./types.js"
import { EnumTypeSource, FunctionTypeSource } from "./typesource.js"

function extractText(fullText: string): string | null {
    const m = fullText.match(/(?:(?:const )|(?:optional ))?([a-zA-Z0-9_]+)/)

    if (!m) {
        return null
    }

    return m[1]
}

function extractType(fullText: string): string | null {
    const m = fullText.match(/(?:(?:const )|(?:optional ))?([a-zA-Z0-9_\/]+)/)

    if (!m) {
        return null
    }

    return m[1]
}

function cleanDocumentation(documentation: string) {
    return documentation.trim().split("\n").map(line => line.trim()).join("\n")
}

const parseFunction = (functionNode: HTMLElement): TypeSourceFunction => {
    const returnType = functionNode.childNodes[0].text.trim()
    const name = extractText(functionNode.childNodes[1].text)
    if (!name) {
        throw new Error("Could not find name for function")
    }

    const parameters: TypeSourceParameter[] = []
    let optional = undefined
    for (let i = 2; i + 1 < functionNode.childNodes.length; i += 2) {
        const type = extractType(functionNode.childNodes[i].text)
        const name = extractText(functionNode.childNodes[i + 1].text)
        if (functionNode.childNodes[i + 1].text.toLowerCase().includes("opt_")) {
            optional = true
        }

        if (type && name) {
            parameters.push({
                type,
                name,
                optional,
            })
        }

        if (functionNode.childNodes[i + 1].text.includes("[")) {
            optional = true
        }
    }

    const tableNode = functionNode.parentNode?.parentNode?.parentNode
    let documentation = tableNode?.childNodes?.filter(node => node.nodeType === NodeType.ELEMENT_NODE)?.[1]?.text
    if (documentation) {
        documentation = cleanDocumentation(documentation)
    }

    return {
        name,
        returnType,
        parameters,
        documentation,
    }
}

const parseFunctions = (fnListHtml: string) => {
    const root = parse(fnListHtml)
    const functionNodes = root.querySelectorAll(".function")
    return functionNodes.map(parseFunction)
}

const parseEnum = (enumNode: HTMLElement): TypeSourceEnum => {
    const name = enumNode.text.trim()
    const members: TypeSourceEnumMember[] = []

    for (const memberElement of enumNode.parentNode.parentNode.querySelectorAll(".tablesubtitle")) {
        members.push({
            name: memberElement.text.trim()
        })
    }

    return {
        name,
        members,
    }
}

const parseEnums = (enumListHtml: string) => {
    const root = parse(enumListHtml)
    const enumNodes = root.querySelectorAll(".tabletitle")
    return enumNodes.map(parseEnum)
}

export const makeScarDocsFunctionTypeSource: (html: string) => FunctionTypeSource = html => {
    return {
        getFunctions: () => parseFunctions(html),
    }
}

export const makeScarDocsEnumTypeSource: (html: string) => EnumTypeSource = html => {
    return {
        getEnums: () => parseEnums(html),
    }
}