# Writing Maintainable Code (/docs/tips/writing-code)



Writing code that *works* is only half the battle. Writing code that's easy to read, understand and modify months later is what separates a good developer from a great one. As your project grows, you'll find yourself spending far more time reading and maintaining existing code than writing new code. These practices make that experience much more enjoyable, for both yourself and anybody else that works on your project.

## Use Meaningful Names [#use-meaningful-names]

Variable and function names should be easily descriptive for what purpose they serve, not saving a few keystrokes.

* Bad

```lua
    local p = PlayerPedId()
    local c = GetEntityCoords(p)
```

* Good

```lua
    local playerPed = PlayerPedId()
    local playerPos = GetEntityCoords(playerPed)
```

Someone reading your code shouldn't have to guess what `p` or `c` actually means.

## Keep Functions Small [#keep-functions-small]

A function generally should do one thing. Instead of creating one large function that handles multiple responsibilities like `SpawnVehicle()`, break it up into smaller functions like `LoadModel()`, `CreateVehicle()`, `SetupVehicle()`, `GetVehicleKeys()`. Smaller functions are easier to read, test, debug and can be reused instead of rewriting the same code a dozen times.

## Avoid Deep Nesting [#avoid-deep-nesting]

Code that is nested several levels deep quickly becomes difficult to follow.

* Bad

```lua
local function doThing()
    if player then
        if player.job then
            if player.job.name == "police" then
                -- do thing
            end
        end
    end
end
```

* Good

```lua
local function doThing()
    if not player then return end
    if not player.job then return end
    if player.job.name ~= "police" then return end

    -- Do thing
end
```

Using early returns reduces indentation and makes your intent much clearer.

## Don't Repeat Yourself (DRY) [#dont-repeat-yourself-dry]

If you find yourself copying and pasting code, ask yourself if it should be a function instead.

* Bad

```lua
-- In function one:
SetEntityHeading(vehicle, heading)
SetVehicleOnGroundProperly(vehicle)

-- In another function:
SetEntityHeading(vehicle, heading)
SetVehicleOnGroundProperly(vehicle)

-- In another function
SetEntityHeading(vehicle, heading)
SetVehicleOnGroundProperly(vehicle)
```

* Good

```lua
-- Make a re-usable function that you can reference in other functions.
local function setupVehicle(vehicle, heading)
    SetEntityHeading(vehicle, heading)
    SetVehicleOnGroundProperly(vehicle)
end
```

If you need to change the logic later, you only need to change it in one place.

## Keep Globals to a Minimum [#keep-globals-to-a-minimum]

Keep the global scope as clean as possible, when you can always localize functions and variables.

* Bad

```lua
MovingObject = false -- Variable only referenced in this one file
```

* Good

```lua
local movingObject = false -- Variable only referenced in this one file, defined locally.
```

## Comment the "Why", not the "What" [#comment-the-why-not-the-what]

Good comments will explain *why* something is happening, not *what* is happening. People reading your code should be able to understand *what* is happening just by reading it.

* Bad

```lua
-- Sets the player's health to 200
SetEntityHealth(playerPed, 200)
```

* Good

```lua
-- Give the player temporary health while their character loads.
SetEntityHealth(playerPed, 200)
```

If the code clearly explains *what* it's doing, there's no need to repeat it. Additionally, you shouldn't just spam comments throughout your entire codebase, if it isn't obvious why something is done in a way that's when we'd recommend adding a comment to explain why.

## Be Consistent [#be-consistent]

Consistency is more important than personal preference. Choose a naming style and stick with it, for example:

* `playerPed`
* `playerCoords`
* `vehicleEntity`
* `spawnPosition`

Don't mix multiple naming conventions throughout the same project. Consistency also applies to formatting. Whether you use tabs or spaces, `snake_case` or `camelCase`, choose one style and stick with it throughout your project. Consistent formatting makes code much easier to read.

## Remove Dead Code [#remove-dead-code]

Commented-out code quickly becomes clutter. If you're no longer using it, delete it. That's one of the reasons why we utilize version control like `Git`, you can always recover the old code if you need it. If you aren't using the code anymore, delete it.

## Don't Optimize Too Early [#dont-optimize-too-early]

While this sounds counter productive, focus on writing readable and functioning code before micro optimizations. Write code that works, profile it, and *then* optimize the parts that actually need it.

Premature optimization often makes code more difficult to understand without providing any meaningful performance improvements.

## Leave the Code Better Than You Found It [#leave-the-code-better-than-you-found-it]

Whenever you're working in a file, look for small improvements you can make. Maybe that's renaming a confusing variable, removing unused code, improving a comment or something else. Small improvements add up over time and make your project much easier to maintain.

## Final Thoughts [#final-thoughts]

Maintainable code isn't about writing clever code, it's about writing code that's easy for someone else to understand. That "someone else" usually ends up being you, six months from now.

Future you will thank present you for writing clean, organized and readable code. Here's some more resources for you to reference:

* [Effective FiveM Lua](https://manason.github.io/effective-fivem-lua/)
* [Lua's Beginners Guide](https://github.com/pohka/Lua-Beginners-Guide)
* [Packt Lua QuickStart Guide](https://github.com/PacktPublishing/Lua-Quick-Start-Guide)
* [Lua Manual](https://www.lua.org/manual/)

Code is read far more often than it's written. Optimize for readability first.
