# Age of Empires 4 TypeScript definitions generator
Generates TypeScript definitions for Age of Empires 4 to be used with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

## Usage (types)
`npm i -D @aoemods/aoetypes`

## Usage (generate the types yourself)
- Clone this repo and `npm i`
- (Optional): download https://cm2.network/ScarDoc/function_list.htm to `data/coh2-scardocs/`
- (Optional): copy `function_list.htm` and `enum_list.htm` to `data/aoe4-scardocs/`
- `npm start` will generate the types into `packages/aoetypes/types/aoetypes.d.ts`

## Type sources
- Age of Empires 4 scardocs (no return types)
- Company of Heroes 2 scardocs (has return types, matched across the AoE4 scardocs)

# Acknowledgements
This project was directly inspired by [its Dota 2 counterpart](https://github.com/ModDota/TypeScriptDeclarations).