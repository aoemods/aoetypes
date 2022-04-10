import { TypeSourceFunction } from "./type-sources/types.js";

export type AggregateFunctionsInput = {
    coh2Functions: TypeSourceFunction[]
    aoe4Functions: TypeSourceFunction[]
    functionOverrides: TypeSourceFunction[]
    aoe4ScriptFunctions: TypeSourceFunction[]
}

function functionKey(fn: TypeSourceFunction) {
    if (fn.class) {
        console.log("fn key with class", fn.class, fn.name)
    }

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

    const uniqueScriptFunctions = Object.values(scriptFunctionMap)

    // Some of the entity functions are missing from aoe4 docs for some reason, let's get them
    // from coh2 docs and assume these are correct.
    const coh2EntityFunctions = coh2Functions.filter(fn => fn.name.toLowerCase().startsWith("entity_"))

    const preAggregatedFunctionsMap = Object.fromEntries(aggregatedFunctions.map(fn => [functionKey(fn), fn]))
    for (const fn of uniqueScriptFunctions.concat(coh2EntityFunctions)) {
        if (!(functionKey(fn) in preAggregatedFunctionsMap)) {
            aggregatedFunctions.push(fn)
        }
    }

    return aggregatedFunctions
}