export type TypeSourceType = string

export type TypeSourceParameter = {
    name: string
    type: TypeSourceType
    optional?: boolean
}

export type TypeSourceFunction = {
    name: string
    returnType: TypeSourceType
    documentation?: string
    class?: string
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

export type TypeSourceConstantNumber = {
    type: "number"
    value: number
}

export type TypeSourceConstantString = {
    type: "string"
    value: string
}

export type TypeSourceConstant = { name: string } & (TypeSourceConstantNumber | TypeSourceConstantString)