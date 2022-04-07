import { TypeSourceEnum, TypeSourceFunction, TypeSourceType } from "./type-sources/types"

const extractIndividualTypes = (type: TypeSourceType): TypeSourceType[] => {
    if (type.includes("/")) {
        return type.split("/").flatMap(extractIndividualTypes)
    }

    return [type]
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

function countSpellings(texts: string[]): Record<string, Record<string, number>> {
    const spellingCounts: Record<TypeSourceType, Record<TypeSourceType, number>> = {}

    for (const text of texts) {
        const textLower = text.toLowerCase()
        if (!(textLower in spellingCounts)) {
            spellingCounts[textLower] = {}
        }

        if (!(text in spellingCounts[textLower])) {
            spellingCounts[textLower][text] = 0
        }

        spellingCounts[textLower][text]++
    }

    return spellingCounts
}

function argMax<T>(array: T[]) {
    return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1]
}

export type ExtractTypesInputs = {
    functions: TypeSourceFunction[]
    enums: TypeSourceEnum[]
}

export function extractTypes(inputs: ExtractTypesInputs): TypeSourceType[] {
    const enumTypes = inputs.enums.map(e => e.name)
    const enumTypesLower = new Set<TypeSourceType>(enumTypes.map(enumType => enumType.toLowerCase()))

    const types: TypeSourceType[] = enumTypes

    // Select the most common spelling for each type occuring in all functions.
    // Ignore names that already exist as enum names.
    const fnTypes = inputs.functions.flatMap(
        fn => fn.parameters
            .map(param => param.type)
            .concat([fn.returnType])
            .flatMap(extractIndividualTypes)
    ).filter(fnType => !enumTypesLower.has(fnType.toLowerCase()))

    const typeSpellingsCounts = countSpellings(fnTypes)
    for (const typeSpellings of Object.values(typeSpellingsCounts)) {
        const spellingKvs = Object.entries(typeSpellings)
        const mostCommonIndex = argMax(spellingKvs.map(([_, count]) => count))
        const mostCommonSpelling = spellingKvs[mostCommonIndex][0]
        types.push(mostCommonSpelling)
    }

    return types.map(type => potentiallyRenameType(type))
}