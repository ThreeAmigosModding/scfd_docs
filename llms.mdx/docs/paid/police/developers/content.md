# Developers (/docs/paid/police/developers)



# Complete Police System - Developer Documentation [#complete-police-system---developer-documentation]

Here you will find a basic list of how you can modify our resource if you are a developer. This assumes you have *at minimum* basic knowledge of how FiveM programming works and the lua scripting language.

If you have any exports or events you need, please join our [Discord](https://discord.gg/YzC4Du7WY) and let us know.

## Events [#events]

#### `searchPlayer` [#searchplayer]

Triggered to search a nearby player.

```lua
TriggerEvent("TAM_Police:searchPlayer")

-- or --

TriggerClientEvent("TAM_Police:searchPlayer", sourcePlayerId)
```

#### `escortPlayer` [#escortplayer]

Triggered to escort a nearby player.

```lua
TriggerEvent("TAM_Police:escortPlayer")

-- or --

TriggerClientEvent("TAM_Police:escortPlayer", sourcePlayerId)
```

#### `spawnObject(item)` [#spawnobjectitem]

Spawn an object from the object list.
`item` string name from `data/data_objects.lua`

```lua
TriggerEvent("TAM_Police:spawnObject", "Police Barrier")

-- or --

TriggerClientEvent("TAM_Police:spawnObject", sourcePlayerId, "Police Barrier")
```

#### `deleteObject()` [#deleteobject]

Delete a nearby police object.

```lua
TriggerEvent("TAM_Police:deleteObject")

-- or --

TriggerClientEvent("TAM_Police:deleteObject", sourcePlayerId)
```

## Exports [#exports]

### Client [#client]

#### `isPedCuffed(playerPedId)` [#ispedcuffedplayerpedid]

Returns a boolean on wether the ped is cuffed or not.

```lua
local ped = PlayerPedId()
local cuffed = exports.TAM_Police:isPedCuffed(ped)
```

#### `uncuff()` [#uncuff]

Uncuffs a nearby ped.

```lua
exports.TAM_Police:uncuff()
```

#### `cuff()` [#cuff]

Cuffs a nearby ped.

```lua
exports.TAM_Police:uncuff()
```

#### `unziptie()` [#unziptie]

Unzipties a nearby ped.

```lua
exports.TAM_Police:unziptie()
```

#### `ziptie()` [#ziptie]

Zipties a nearby ped.

```lua
exports.TAM_Police:ziptie()
```

#### `resetHandsUp(playerPedId)` [#resethandsupplayerpedid]

Resets the hands up status of the specified ped.

```lua
local ped = PlayerPedId()
exports.TAM_Police:resetHandsUp(ped)
```

## Configuring your own integrations [#configuring-your-own-integrations]

All of the bridge files are located in `bridge` directory. This requires decent knowledge of the lua scripting language and how FiveM works. This is mostly unsupported.
