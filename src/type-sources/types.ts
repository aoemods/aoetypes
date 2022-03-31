export type TypeSourceType = string

export type TypeSourceParameter = {
    name: string
    type: TypeSourceType
}

export type TypeSourceFunction = {
    name: string
    returnType: TypeSourceType
    documentation?: string
    parameters: TypeSourceParameter[]
}

export type TypeSourceEnumMember = {
    name: string
    value?: number
}

export type TypeSourceEnum = {
    name: string
    members: TypeSourceEnumMember[]
}