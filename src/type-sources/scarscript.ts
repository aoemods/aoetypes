import { TypeSourceFunction } from "./types.js"
import { FunctionTypeSource } from "./typesource.js"

function extractFunctionName(fullText: string): [string | undefined, string, string] | null {
    const m = fullText.match(/function (?:([a-zA-Z0-9_]+):)?([a-zA-Z0-9_]+)\((.*)\)/)

    if (!m) {
        return null
    }

    return [m[1], m[2], m[3]]
}

function extractCommentDirective(fullText: string): [string, string] | null {
    const m = fullText.match(/@([a-zA-Z0-9_]+) (.*)/)

    if (!m) {
        return null
    }

    return [m[1], m[2]]
}

function extractArg(fullText: string): [string, string] | null {
    const m = fullText.match(/([a-zA-Z0-9_\/]+) +(.+)/)

    if (!m) {
        return null
    }

    return [m[1], m[2]]
}

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

function parseFunctions(source: string): TypeSourceFunction[] {
    const functions: TypeSourceFunction[] = []

    let currentFunction: Partial<TypeSourceFunction> | undefined

    function pushCurrentFunction() {
        if (currentFunction && currentFunction.name && currentFunction.parameters && currentFunction.returnType) {
            functions.push({
                name: currentFunction.name,
                parameters: currentFunction.parameters,
                returnType: currentFunction.returnType,
                documentation: currentFunction.documentation,
            })
        }

        currentFunction = undefined
    }

    let currentCommentDirective: { directive?: string, content: string } | undefined

    function pushCurrentCommentDirective() {
        if (currentCommentDirective && currentFunction) {
            switch (currentCommentDirective.directive) {
                case "args":
                    const rawArgs = currentCommentDirective.content
                        .split(",")
                        .map(arg => arg.trim())
                        .filter(arg => !!arg)
                    const extractedArgs = rawArgs.map(arg => extractArg(arg))

                    if (extractedArgs.some(rawArg => !rawArg)) {
                        currentFunction.parameters = undefined
                        break
                    }

                    currentFunction.parameters = []

                    let optional: boolean | undefined
                    for (let i = 0; i < extractedArgs.length; i++) {
                        const [extractedArgType, extractedArgName] = extractedArgs[i] as [string, string]

                        const name = extractText(extractedArgName)
                        const type = extractType(extractedArgType)

                        if (!name || !type) {
                            currentFunction.parameters = undefined
                            break
                        }

                        if ((rawArgs[i].includes("[") && !rawArgs[i].endsWith("[")) || name.toLowerCase().startsWith("opt_") || type.toLowerCase().startsWith("opt_")) {
                            optional = true
                        }

                        currentFunction.parameters.push({
                            name,
                            type,
                            optional,
                        })

                        if (rawArgs[i].endsWith("[")) {
                            optional = true
                        }
                    }
                    break
                case "result":
                    currentFunction.returnType = extractText(currentCommentDirective.content) ?? undefined
                    break
                case "shortdesc":
                    if (currentFunction.documentation) {
                        currentFunction.documentation = currentCommentDirective.content + "\n" + currentFunction.documentation
                    } else {
                        currentFunction.documentation = currentCommentDirective.content
                    }
                    break
                case "extdesc":
                    if (currentFunction.documentation) {
                        currentFunction.documentation = currentFunction.documentation + "\n" + currentCommentDirective.content
                    } else {
                        currentFunction.documentation = currentCommentDirective.content
                    }
                    break
                default:
                    break
            }
        }

        currentCommentDirective = undefined
    }

    const lines = source.split("\n")

    while (lines.length > 0) {
        const line = lines.pop()!.trim()

        if (!line.startsWith("--?")) {
            pushCurrentCommentDirective()

            const newFunction = extractFunctionName(line)
            if (newFunction) {
                const [newFunctionClass, newFunctionName, newFunctionArgs] = newFunction
                pushCurrentFunction()

                currentFunction = {
                    class: newFunctionClass,
                    name: newFunctionName,
                    parameters: newFunctionArgs.split(",").map(arg => extractText(arg)).filter(arg => !!arg).map(arg => {
                        return {
                            name: arg as string,
                            type: "any",
                            optional: (arg as string).toLowerCase().startsWith("opt_"),
                        }
                    })
                }
            }
        } else if (currentFunction) {
            const commentText = line.replace("--?", "").trimStart()
            const commentDirective = extractCommentDirective(commentText)
            if (commentDirective) {
                if (currentCommentDirective) {
                    currentCommentDirective.directive = commentDirective[0]
                    currentCommentDirective.content = commentDirective[1] + "\n" + currentCommentDirective.content
                } else {
                    currentCommentDirective = {
                        directive: commentDirective[0],
                        content: commentDirective[1]
                    }
                }

                pushCurrentCommentDirective()
            } else {
                if (currentCommentDirective) {
                    currentCommentDirective.content = commentText + "\n" + currentCommentDirective.content
                } else {
                    currentCommentDirective = {
                        content: commentText
                    }
                }
            }
        }
    }

    pushCurrentCommentDirective()
    pushCurrentFunction()

    return functions
}

export const makeScarScriptFunctionTypeSource: (source: string) => FunctionTypeSource = source => {
    return {
        getFunctions: () => parseFunctions(source),
    }
}