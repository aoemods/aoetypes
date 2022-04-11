import { TypeSourceFunction } from "./type-sources/types";

export const functions: TypeSourceFunction[] = [
    {
        name: "UI_CreateEventCue",
        parameters: [
            {
                name: "title",
                type: "string",
            },
            {
                name: "description",
                type: "string/nil",
            },
            {
                name: "data_template",
                type: "string",
            },
            {
                name: "icon_path",
                type: "string",
            },
            {
                name: "sound_path",
                type: "string",
            },
            {
                name: "visibility",
                type: "EventCueVisibility",
                optional: true,
            },
            {
                name: "lifetime",
                type: "Real",
                optional: true,
            },
        ],
        returnType: "Event",
        documentation: "Creates an event cue without a callback (you won't know when it's clicked).",
    },
    {
        name: "UI_DestroyTagForPosition",
        parameters: [
            {
                name: "position",
                type: "Position",
            },
        ],
        returnType: "void",
        documentation: "Destroy a position tag.\nposition: same of or extremely close (std::numeric_limits<float>::min()) to an existing position. If there are multiple candidates, delete the closest.",
    },
    {
        name: "Vector_Length",
        parameters: [
            {
                name: "pos",
                type: "Position",
            },
        ],
        returnType: "number",
        documentation: "Calculates the length of the provided vector",
    },
    {
        name: "Vector_Lerp",
        parameters: [
            {
                name: "factor",
                type: "number",
            },
            {
                name: "pos1",
                type: "Position",
            },
            {
                name: "pos2",
                type: "Position",
            },
        ],
        returnType: "Position",
        documentation: "Linearly interpolates between the two provided vectors based on the provided factor",
    },
    {
        name: "Vector_Normalize",
        parameters: [
            {
                name: "pos",
                type: "Position",
            },
        ],
        returnType: "Position",
        documentation: "Returns the normalized version of the provided vector.\nReturns a vector pointing the same direction as the provided vector, but shortened/elongated to a length of 1. Don't pass in a vector of length 0, or you'll get a divide-by-zero error!",
    },
]
