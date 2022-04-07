import fs from "fs/promises"
import { TypeSourceEnum, TypeSourceFunction } from "./type-sources/types.js"
import { makeScarDocsEnumTypeSource, makeScarDocsFunctionTypeSource } from "./type-sources/scardocs.js"
import { makeScarScriptFunctionTypeSource } from "./type-sources/scarscript.js"
import { functions as functionOverrides } from "./overrides.js"


export type TypeSources = {
    coh2Functions: TypeSourceFunction[]
    aoe4Functions: TypeSourceFunction[]
    functionOverrides: TypeSourceFunction[]
    aoe4ScriptFunctions: TypeSourceFunction[]
    aoe4Enums: TypeSourceEnum[]
}

async function loadAoe4ScriptFunctions() {
    let aoe4ScriptFunctions: TypeSourceFunction[] = []

    async function getScriptFiles(dir: string): Promise<string[]> {
        let resultPaths: string[] = []
        const paths = (await fs.readdir(dir)).map(path => `${dir}/${path}`)
        for (const path of paths) {
            const pathStats = await fs.stat(path)
            if (pathStats.isDirectory()) {
                resultPaths = resultPaths.concat(await getScriptFiles(path))
            } else if (pathStats.isFile() && (path.endsWith(".scar") || path.endsWith(".lua"))) {
                resultPaths.push(path)
            }
        }

        return resultPaths
    }

    const scriptPaths = await getScriptFiles("data/aoe4-scar")
    for (const scriptPath of scriptPaths) {
        const scriptSource = await fs.readFile(scriptPath, "utf-8")
        aoe4ScriptFunctions = aoe4ScriptFunctions.concat(
            makeScarScriptFunctionTypeSource(scriptSource).getFunctions()
        )
    }

    return aoe4ScriptFunctions
}

export async function loadSources(): Promise<TypeSources> {
    const aoe4FunctionsHtml = await fs.readFile("data/aoe4-scardocs/function_list.htm", "utf-8")
    const aoe4EnumsHtml = await fs.readFile("data/aoe4-scardocs/enum_list.htm", "utf-8")
    const coh2FunctionsHtml = await fs.readFile("data/coh2-scardocs/function_list.htm", "utf-8")

    const aoe4Functions = makeScarDocsFunctionTypeSource(aoe4FunctionsHtml).getFunctions()
    const aoe4Enums = makeScarDocsEnumTypeSource(aoe4EnumsHtml).getEnums()
    const coh2Functions = makeScarDocsFunctionTypeSource(coh2FunctionsHtml).getFunctions()
    const aoe4ScriptFunctions = await loadAoe4ScriptFunctions()

    return {
        aoe4Functions,
        coh2Functions,
        functionOverrides,
        aoe4ScriptFunctions,
        aoe4Enums,
    }
}