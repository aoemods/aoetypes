import { TypeSourceFunction } from "./type-sources/types.js";

export type AggregateFunctionsInput = {
    coh2Functions: TypeSourceFunction[]
    aoe4Functions: TypeSourceFunction[]
    functionOverrides: TypeSourceFunction[]
    aoe4ScriptFunctions: TypeSourceFunction[]
}

function functionKey(fn: TypeSourceFunction) {
    return `${fn.class ? `${fn.class}:` : ""}${fn.name}`
}

export function aggregateFunctions(inputs: AggregateFunctionsInput): TypeSourceFunction[] {
    const { aoe4Functions, coh2Functions, functionOverrides, aoe4ScriptFunctions } = inputs

    const scriptFunctionMap = Object.fromEntries(aoe4ScriptFunctions.map(fn => [functionKey(fn), fn]))

    const replacementFunctions = Object.fromEntries(
        coh2Functions.concat(aoe4ScriptFunctions).concat(functionOverrides).map(fn => [functionKey(fn), fn])
    )

    const aggregatedFunctions = [...aoe4Functions]
    for (let i = 0; i < aggregatedFunctions.length; i++) {
        const fnKey = functionKey(aoe4Functions[i])
        if (fnKey in replacementFunctions) {
            aggregatedFunctions[i] = replacementFunctions[fnKey]
        }
    }

    const preAggregatedFunctionsMap = Object.fromEntries(aggregatedFunctions.map(fn => [functionKey(fn), fn]))
    for (const fn of Object.values(scriptFunctionMap)) {
        if (!(functionKey(fn) in preAggregatedFunctionsMap)) {
            aggregatedFunctions.push(fn)
        }
    }

    return aggregatedFunctions
}