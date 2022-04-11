import { TypeSourceConstant, TypeSourceEnum, TypeSourceEnumMember } from "./types.js"
import { ConstantTypeSource, EnumTypeSource } from "./typesource.js"

function extractConstant(fullText: string): TypeSourceConstant | null {
    const m = fullText.match(/\[([A-Za-z0-9_]+)\] => \((number|string)\) (.+)/)

    if (m) {
        switch (m[2]) {
            case "string":
                return {
                    name: m[1],
                    type: m[2],
                    value: m[3].substring(1, m[3].length - 1),
                }
            case "number":
                return {
                    name: m[1],
                    type: m[2],
                    value: parseFloat(m[3]),
                }
        }
    }

    return null
}

type ExtractEnumResult = { name: string, member: TypeSourceEnumMember }

function extractEnum(fullText: string): ExtractEnumResult | null {
    const m = fullText.match(/\[([A-Za-z0-9_]+)\] => \(userdata\) "(?:.+::)?([a-zA-Z0-9_]+)\(\d+\)"/)

    if (m) {
        return {
            name: m[2],
            member: {
                name: m[1],
                value: parseInt(m[3])
            }
        }
    }

    return null
}

function getLines(text: string): string[] {
    return text.split("\n").map(line => line.trim()).filter(line => line)
}

const parseConstants = (text: string): TypeSourceConstant[] => {
    const lines = getLines(text)
    const constants = lines.map(line => extractConstant(line)).filter(result => result !== null) as TypeSourceConstant[]
    return constants
}

const parseEnums = (text: string): TypeSourceEnum[] => {
    const lines = getLines(text)
    const enumMembers = lines.map(line => extractEnum(line)).filter(result => result !== null) as ExtractEnumResult[]
    const enums: Record<string, TypeSourceEnum> = {}

    for (const enumMember of enumMembers) {
        if (!(enumMember.name in enums)) {
            enums[enumMember.name] = {
                name: enumMember.name,
                members: [],
            }
        }

        enums[enumMember.name].members.push(enumMember.member)
    }

    return Object.values(enums)
}

export const makeGlobalsDumpConstantsTypeSource: (text: string) => ConstantTypeSource = text => {
    return {
        getConstants: () => parseConstants(text),
    }
}

export const makeGlobalsDumpEnumTypeSource: (text: string) => EnumTypeSource = text => {
    return {
        getEnums: () => parseEnums(text),
    }
}