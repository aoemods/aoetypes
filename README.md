# Age of Empires 4 TypeScript definitions generator
Generates TypeScript definitions for Age of Empires 4 to be used with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

View the types in your browser [here](https://aoemods.github.io/aoetypes-docs).

## Usage (types)
- `npm i -D @aoemods/aoetypes`
- Add this to your `tsconfig.json` file.
```json
{
    "compilerOptions": {
        "types": [
            "@aoemods/aoetypes"
        ],
    },
}
```

## Usage (generate the types yourself)
- Clone this repo and `npm i`
- (Optional): download https://cm2.network/ScarDoc/function_list.htm to `data/coh2-scardocs/`
- (Optional): copy `function_list.htm` and `enum_list.htm` to `data/aoe4-scardocs/`
- Copy scar / lua scripts from data.sga archives to `data/aoe4-scar/` (both cardinal and engine, the script will search there recursively so doesn't matter what the folders are named)
- `npm start` will generate the types into `packages/aoetypes/types/aoetypes.d.ts`

## Type sources
- Age of Empires 4 scardocs (no return types)
- Company of Heroes 2 scardocs (has return types, matched across the AoE4 scardocs)

# Acknowledgements
This project was directly inspired by [its Dota 2 counterpart](https://github.com/ModDota/TypeScriptDeclarations).