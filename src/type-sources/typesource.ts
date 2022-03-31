import { TypeSourceEnum, TypeSourceFunction } from "./types.js"

export interface FunctionTypeSource {
    getFunctions(): TypeSourceFunction[]
}

export interface EnumTypeSource {
    getEnums(): TypeSourceEnum[]
}
