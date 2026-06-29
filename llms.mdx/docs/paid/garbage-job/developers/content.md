# Developers (/docs/paid/garbage-job/developers)





Here you will find a basic list of how you can modify our resource if you are a developer. This assumes you have *at minimum* basic knowledge of how FiveM programming works and the lua scripting language.

If you have any exports or events you need, please [contact](https://scuffedlabs.com/contact) us.

*We will provide minimal assistance when integrating other resources or implementing your own features*

## Hooks [#hooks]

Various hooks exist for you to integrate your own features, these can be found in `bridge/hooks/server.lua` and `bridge/hooks/client.lua` respectively. All of these have comments explaining how they function.

## Events & Callbacks [#events--callbacks]

*Note: there are currently no accessible client events or callbacks at this time*

<Tabs items="[&#x22;Server&#x22;]">
  <Tab value="Server">
    ### scfd\_garbagejob:fetchTruck [#scfd_garbagejobfetchtruck]

    This is a callback to try and spawn a truck, this will run through *all* checks before executing.

    ```lua
    --- Attempts to spawn and setup the truck.
    ---@param locationIndex number The table index from the locations.lua file.
    ---@param vehData table vehicle configuration data.
    ---@return boolean, string|integer?
    local function spawnTruck(source, locationIndex, vehData)
        return lib.callback.await("scfd_garbagejob:fetchTruck", false, source, locationIndex, vehData)
    end
    ```

    ### scfd\_garbagejob:fetchTruckData [#scfd_garbagejobfetchtruckdata]

    Fetches a players truck data, if it exists.

    ```lua
    --- Fetches a trucks data
    ---@param source integer playerId
    ---@return privateTruckData?
    local function getTruckData(source)
        return lib.callback.await("scfd_garbagejob:fetchTruckData", false, source)
    end
    ```

    ### scfd\_garbagejob:returnTruck [#scfd_garbagejobreturntruck]

    Attempts to return a players truck, if possible.

    ```lua
    --- Attempts to return a players truck if possible.
    ---@param locationIndex integer Table index of location
    ---@param returnPos vector3 The current position, this must match one of the positions within the location config.
    TriggerServerEvent("scfd_garbagejob:returnTruck", src, locationIndex, returnPos)
    ```

    ### scfd\_garbagejob:clockIn [#scfd_garbagejobclockin]

    Attempts to clock the player in, if possible.

    ```lua
    --- Attempts to clock a player in, if possible.
    ---@param locationIndex integer Table index of location
    TriggerServerEvent("scfd_garbagejob:clockIn", src, locationIndex)
    ```

    ### scfd\_garbagejob:clockOut [#scfd_garbagejobclockout]

    Attempts to clock the player out, if possible.

    ```lua
    --- Attempts to clock the player out, if possible.
    ---@param locationIndex integer Table index of location
    TriggerServerEvent("scfd_garbagejob:clockOut", src, locationIndex)
    ```
  </Tab>
</Tabs>

## Exports [#exports]

<Tabs items="[&#x22;Server&#x22;, &#x22;Client&#x22;]">
  <Tab value="Server">
    ### getPlayerTruck [#getplayertruck]

    Return player's truck. If ownerOnly true, return only if player is owner

    ```lua
    ---Return player's truck. If ownerOnly true, return only if player is owner (fast via map).
    ---@param src integer
    ---@param ownerOnly boolean?
    ---@return Truck?
    local truckData = exports.scfd_garbagejob:getPlayerTruck(src, ownerOnly)
    ```

    ### handlePayout [#handlepayout]

    Handles payout distribution and cleans up truck.

    ```lua
    ---Handle payout distribution and cleanup
    ---@param src integer playerId
    ---@param truck Truck truckData from `getPlayerTruck`
    ---@param crew table? crew table.
    exports.scfd_garbagejob:handlePayout(src, truck, crew)
    ```

    ### giveRandomItemReward [#giverandomitemreward]

    Gives an item reward to player based on zone loot table

    ```lua
    ---Gives an item reward to player based on zone loot table
    ---@param src integer playerId
    ---@param zone string zoneId
    exports.scfd_garbagejob:giveRandomItemReward(src, zone)
    ```

    ### getTruckConfigData [#gettruckconfigdata]

    Gets a trucks config information from its model.

    ```lua
    --- Gets a trucks config information from its model.
    ---@param model integer truckModel
    ---@return table?
    exports.scfd_garbagejob:getTruckConfigData(model)
    ```

    ### handleDeposit [#handledeposit]

    Handles the deposit refund logic when a truck is returned.

    ```lua
    --- Handles the deposit refund logic when a truck is returned.
    ---@param src integer Player ID returning the truck
    ---@param truck Truck The truck being returned
    exports.scfd_garbagejob:handleDeposit(src, truck)
    ```

    ### assignZoneToTruck [#assignzonetotruck]

    Assigns a new random zone to a truck, or if there is no available zone returns nil

    ```lua
    --- Assigns a new random zone to a truck, or if there is no available zone returns nil
    ---@param truck Truck truckData
    ---@return string? newZone
    local newZone = exports.scfd_garbagejob:assignZoneToTruck(truck)
    ```

    ### addTrashToZone [#addtrashtozone]

    Adds trash to the trucks current zone, if the maxCollection amount is reached it will assign a new zone.

    ```lua
    --- Adds trash to the trucks current zone, if the maxCollection amount is reached it will assign a new zone.
    ---@param truck Truck truckData
    ---@param amount integer the amount of trash to add.
    ---@return string? newZone
    local newZone = exports.scfd_garbagejob:addTrashToZone(truck, amount)
    ```
  </Tab>

  <Tab value="Client">
    ### clockIn [#clockin]

    Attempt to clock the player in.

    ```lua
    --- Attempt to clock the player in.
    ---@param locationIndex integer table index for location
    exports.scfd_garbagejob:clockIn(locationIndex)
    ```

    ### clockOut [#clockout]

    Attempt to clock the player out.

    ```lua
    --- Attempt to clock the player out.
    ---@param locationIndex integer table index for location
    exports.scfd_garbagejob:clockOut(locationIndex)
    ```

    ### viewTrucks [#viewtrucks]

    Opens the truck context menu to spawn a truck.

    ```lua
    --- Opens the truck context menu to spawn a truck.
    ---@param locationIndex integer table index for location
    exports.scfd_garbagejob:viewTrucks(locationIndex)
    ```

    ### collectPayment [#collectpayment]

    Attempts to collect payment.

    ```lua
    --- Attempts to collect payment.
    ---@param locationIndex integer table index for location
    exports.scfd_garbagejob:collectPayment(locationIndex)
    ```

    ### returnTruck [#returntruck]

    Attempts to return the players truck

    ```lua
    --- Attempts to return the players truck
    ---@param locationIndex integer table index for location
    ---@param inside boolean If the player is inside the truck or not.
    ---@param zonePos vector3 The zone position from returnPoints for the specified location index. Must match.
    exports.scfd_garbagejob:returnTruck(locationIndex, inside, zonePos)
    ```

    ### unloadTruck [#unloadtruck]

    Attempts to unload the players truck, they must be inside

    ```lua
    --- Attempts to unload the players truck, they must be inside
    ---@param locationIndex integer table index for location
    ---@param zonePos vector3 The zone position from unloadPoints for the specified location index. Must match.
    exports.scfd_garbagejob:unloadTruck(locationIndex, zonePos)
    ```

    ### addTrashToTruck [#addtrashtotruck]

    Attempts to add trash to the truck.

    ```lua
    --- Attempts to add trash to the truck.
    ---@param trashData {netId: integer, zone: string}
    ---@param truckData {netId: integer, plate: string}
    exports.scfd_garbagejob:addTrashToTruck(trashData, truckData)
    ```

    ### setOutfit [#setoutfit]

    Sets a peds outfit

    ```lua
    --- Sets the peds outfit
    ---@param ped integer pedID
    ---@param outfitId string Outfit name from data file.
    exports.scfd_garbagejob:setOutfit(ped, outfitId)
    ```

    ### resetOutfit [#resetoutfit]

    Resets a peds outfit back to their previous one, if able.

    ```lua
    --- Resets a peds outfit back to their previous one, if able.
    ---@param ped integer pedID
    exports.scfd_garbagejob:resetOutfit(ped)
    ```

    ### openGroupMenu [#opengroupmenu]

    Opens the group management menu.

    ```lua
    --- Opens the group management menu.
    exports.scfd_garbagejob:openGroupMenu()
    ```

    ### leaveGroup [#leavegroup]

    Leave the current group, if able

    ```lua
    --- Leave the current group, if able
    exports.scfd_garbagejob:leaveGroup()
    ```
  </Tab>
</Tabs>

## Statebags [#statebags]

You can view available states in `shared/const.lua` in the `CONST.STATES` table.
