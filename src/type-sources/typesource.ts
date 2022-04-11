import { TypeSourceConstant, TypeSourceEnum, TypeSourceFunction } from "./types.js"

export interface FunctionTypeSource {
    getFunctions(): TypeSourceFunction[]
}

export interface EnumTypeSource {
    getEnums(): TypeSourceEnum[]
}

export interface ConstantTypeSource {
    getConstants(): TypeSourceConstant[]
}