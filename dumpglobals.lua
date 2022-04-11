--[[
    Run this in the ingame console.
    Writes a log file to Documents/My Games/Age of Empires IV/LogFiles/AoE4_<time>/dump.txt with all globals.
    You can copy these to data/aoe4-dumps.
--]]
do function dumpvar(a)local b={}local c=""local d="    "local function e(f,g)local h=type(f)local i=tostring(f)if h=="table"then if b[i]then c=c.."<"..i..">\n"else b[i]=(b[i]or 0)+1;c=c.."("..i..") {\n"for j,k in pairs(f)do c=c..string.rep(d,g+1).."["..j.."] => "e(k,g+1)end;c=c..string.rep(d,g).."}\n"end elseif h=="number"then c=c.."("..h..") "..i.."\n"else c=c.."("..h..") \""..i.."\"\n"end end;e(a,0)return c end;logprintto("dump.txt",dumpvar(_G))end
