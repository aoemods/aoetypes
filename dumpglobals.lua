--[[
    1. Copy this script to a map and start it.
    2. Copy the results from the scarlogs text file at Documents/My Games/Age of Empires IV/LogFiles/AoE4_<time>/ to data/aoe4-dumps/dump.txt
--]]
import("MissionOMatic/MissionOMatic.scar")

function Mission_Start()
    function dumpvar(a)
        local b = {}
        local c = ""
        local d = "    "
        local function e(f, g)
            local h = type(f)
            local i = tostring(f)
            if h == "table" then
                if b[i] then
                    c = c .. "<" .. i .. ">\n"
                    print(c)
                    c = ""
                else
                    b[i] = (b[i] or 0) + 1;
                    c = c .. "(" .. i .. ") {\n"
                    print(c)
                    c = ""
                    for j, k in pairs(f) do
                        c = c .. string.rep(d, g + 1) .. "[" .. j .. "] => "
                        e(k, g + 1)
                    end
                    c = c .. string.rep(d, g) .. "}\n"
                    print(c)
                    c = ""
                end
            elseif h == "number" then
                c = c .. "(" .. h .. ") " .. i .. "\n"
                print(c)
                c = ""
            else
                c = c .. "(" .. h .. ") \"" .. i .. "\"\n"
                print(c)
                c = ""
            end
        end
        e(a, 0)
        return c
    end

    print("##Start globals dump")
    dumpvar(_G)
    print("##End globals dump")
end

function GetRecipe()
    return {}
end
