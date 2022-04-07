import * as dtsDom from "dts-dom"
import fs from "fs/promises"
import { loadSources } from "./load-sources.js"
import { createDts } from "./dts-creation.js"

const sources = await loadSources()
const dts = createDts(sources).map(member => dtsDom.emit(member)).join("")

await fs.writeFile("packages/aoetypes/types/aoetypes.d.ts", dts)