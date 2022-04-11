import { TypeSourceConstant } from "./types.js"
import { ConstantTypeSource } from "./typesource.js"

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

const parseConstants = (text: string): TypeSourceConstant[] => {
    const lines = text.split("\n").map(line => line.trim()).filter(line => line)
    const constants = lines.map(line => extractConstant(line)).filter(result => result !== null) as TypeSourceConstant[]
    return constants
}

export const makeGlobalsDumpConstantsTypeSource: (text: string) => ConstantTypeSource = text => {
    return {
        getConstants: () => parseConstants(text),
    }
}