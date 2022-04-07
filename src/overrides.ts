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
]