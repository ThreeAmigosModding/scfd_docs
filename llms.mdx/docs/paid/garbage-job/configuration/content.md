# Configuration (/docs/paid/garbage-job/configuration)





## Configuration & Data files [#configuration--data-files]

All of the configuration & data files have detailed comments explaining how to configure everything to your liking, if you need assistance please reach out to us via Discord.

The main config file is located at `data/configuration.lua` and handles the general configuration data.

The locations data file is located at `data/locations.lua` and handles all of the location-specific information like ped locations, return points, etc

The outfits data file is located at `data/outfits.lua` and handles all of the outfit information.

The props data file is located at `data/props.lua` and handles all of the prop information for dumpsters, bins & bags. This is also where you can adjust the amounts you get per trash type.

The zone names data file is located at `data/zone_names.lua` and is just a list of zone names, you most likely wont need to edit this.

The zones data file is located at `data/zones.lua` and includes over a dozen preconfigured zones around the map.

<Tabs items="[&#x22;configuration.lua&#x22;, &#x22;locations.lua&#x22;, &#x22;outfits.lua&#x22;, &#x22;props.lua&#x22;, &#x22;zone_names.lua&#x22;, &#x22;zones.lua&#x22;]">
  <Tab value="configuration.lua">
    ```lua
        -- Enable debug mode for setup & testing. Enables various debug commands & prints.
        config.debug = true -- boolean. Default: false
        
        -- Enable or disable the version checker, recommended to leave this enabled to be notified of when there is an update available.
        config.enableVersionCheck = true -- boolean. Default: true
        
        -- Framework
        -- "auto" | "qb" | "qbx" | "esx" | "nd" | "standalone" | "custom"
        config.framework = "auto"
        
        -- Inventory
        -- "auto" | "ox" | "none" | "custom"
        config.inventory = "auto" -- string.
        
        -- Interaction / Target
        -- "auto" | "ox" | "sleepless" | "none" | "custom"
        config.interaction = "auto" -- string.
        
        -- Text UI System
        -- "auto" | "ox" | "lation" | "custom"
        config.textui = "auto" -- string.
        
        -- Notification system
        -- "auto" | "ox" | "lation" | "wasabi" | "custom"
        config.notification = "auto" -- string
        
        -- Progressbar system
        -- "auto" | "ox" | "lation" | "custom"
        config.progressbar = "auto"
        
        -- Context Menu system
        -- "auto" | "ox" | "lation" | "custom"
        config.contextMenu = "auto"
        
        -- Vehicle key systems
        -- "auto" | "qb" | "qbx" | "wasabi" | "cd" | "renewed" | "custom" | "none"
        config.vehicleKeys = "auto"
        
        -- Fuel systems
        -- "auto" | "scfd" | "ox" | "cdn" | "legacy" | "renewed" | "custom" | "none"
        config.fuelSystem = "auto"
        
        -- The job name
        config.job = "garbage" -- string. Default: "garbage"
        
        -- Require players to have the job to perform any tasks.
        config.requireJob = true -- boolean. Default: true
        
        -- Require players to have the job to pickup the bags, bins and dumpsters. Only players with the job that are on-duty will be able to fill the trucks regardless of this setting.
        config.requireJobForInteraction = false -- boolean. Default: true
        
        -- Require players to be clocked in to pickup the bags, bins & dumpsters. Only players with the job that are on-duty will be able to fill the trucks regardless of this setting.
        config.requireClockInForInteraction = false -- boolean. Default: true
        
        -- Should players be required to empty the truck before returning it?
        -- The empty locations are configurable in data/locations.lua
        config.requireEmpty = true -- boolean. Default: true
        
        -- Should players need to manually return the vehicles or should they automatically be deleted when the player clocks out.
        config.manualReturn = true -- boolean. Default: true
        
        -- Should a waypoint be made to the zone location?
        -- if Config.userSettings is enabled, users will be able to change this on their side via /garbagesettings
        config.drawRoutes = true -- boolean. Default: true
        
        -- Enable trash indicator hud
        -- if Config.userSettings is enabled, users will be able to change this on their side via /garbagesettings
        config.enableHud = true -- boolean. Default: true
        
        -- Default hud position of the indicator hud while inside a garbage truck.
        -- if Config.userSettings is enabled, users will be able to change this on their side via /garbagesettings
        -- "bottom-right" | "bottom-center" | "bottom-left" | "center-left" | "center-right" | "top-right" | "top-center" | "top-left"
        config.hudPosition = "bottom-right" -- string. Default: "bottom-right"
        
        -- Default style of the indicator hud while inside a garbage truck.
        -- if Config.userSettings is enabled, users will be able to change this on their side via /garbagesettings
        -- "horizontal" | "vertical"
        config.hudStyle = "vertical" -- string. Default: "vertical"
        
        -- Enable the user settings menu
        -- Default command is /garbagesettings, you can change this in the locales directory.
        config.userSettings = true -- boolean. Default: true
        
        -- Reset the user settings menu back to default when players load in.
        -- This should only be used if you have changed one of the values and want to update it across all users.
        config.resetUserSettings = false -- boolean. Default: false
        
        -- Enable the random item drops when players are putting the trash into the truck.
        -- You can define the items and their chances per zone in data/zones.lua
        config.itemRewards = true -- boolean. Default: true.
        
        -- The chance percentage to give a random item drop
        -- range from 0-100
        config.itemDropPercentage = 25 -- integer. Default: 25
        
        -- Should players be able to return the trucks from the ped or have to drive them to the point to return them.
        config.returnTrucksAtPed = false -- boolean. Default: false
        
        -- Should players be teleported into the truck when it spawns?
        config.teleportIntoVehicle = false -- boolean. Default: false
        
        -- Should vehicles be spawned using CreateVehicleServerSetter.
        -- If you don't know what this means, I recommend you leave it alone.
        -- If you do know what it means, I recommend enabling it, however it may cause instability on higher population servers.
        -- If you do enable this, PLEASE disable config.teleportIntoVehicle as it is highly likely to cause issues.
        config.spawnVehicleWithServerSetter = false -- boolean. Default: false
        
        -- The chance of the route being completed after reach completed zone after minZone is met.
        -- This is a percentage range from 0-100. Ie 25 = 25%
        config.zoneChance = 25 -- integer. Default: 25
        
        -- The time it takes to load the dumpster into the truck (Progress bar)
        -- In milliseconds.
        config.dumpsterUnloadTime = 2500 -- integer. Default: 2500
        
        -- The time it takes to unload the truck. (Progress bar)
        -- In milliseconds
        config.truckUnloadTime = 8000 -- integer. Default: 8000
        
        -- Deposit Configuration
        config.deposit = {
            -- Enables the deposit / payments for the trucks.
            enabled = true, -- boolean. Default: true
        
            -- Should the deposits be refunded when the truck is returned?
            shouldRefund = true, -- boolean. Default: true
        
            -- Should the amount refunded to the player when they return the truck will be calculated based on the damage the truck has.
            deductDamage = true, -- boolean. Default: true
        
            -- Should the driver will be notified when the damage threshold is met.
            notify = true, -- boolean. Default: true
        
            -- The amount of damage that has to be done to the truck to deduct any money from the deposit.
            deductDamageThreshold = 100, -- integer. Default: 100
        
            -- The amount of money to subtract per additional 100 points of damage after the threshold is met.
            deductionAmount = 100, -- integer. Default: 100
        }
        
        -- Payment configuration.
        config.payment = {
            -- The payment type to use.
            -- ie 'cash' or 'bank'
            type = 'bank', -- string. Default: 'bank'
        
            -- Multiply the payout by the amount of players there are in the group.
            payoutMultiplier = true, -- boolean. Default: true
        
            -- Split the payout evenly between all players, else give each player the total amount (or multiplied amount if enabled.)
            payoutSplit = true, -- boolean. Default: true
        
            -- should we payout when the truck is returned or should the player have to collect it from the ped afterwards.
            automaticPayout = true, -- boolean. Default: true
        
            -- the minimum requirement to return to the trash depot and collect payment.
            -- If this threshold isn't met, a prompt will appear asking the player if they wish to continue to return the truck as they will not be paid.
            minTrashAmount = 1000, -- integer. Default: 1000
        
            -- The amount of money per trash amount that you will receive.
            -- ie: if I collect 2000 trash, my payslip would be $10,000
            paymentPerTrash = 5 -- integer. Default: 5
        }
        
        -- Boss menu configuration
        config.bossMenu = {
            -- Enable the boss menu
            -- INFO: By default, only qb & qbx have boss menus, you will need to integrate your own if you are using a different framework.
            enabled = true, -- boolean. Default: true
        
            -- Boss menu locations
            locations = {
                vec3(-350.12, -1569.78, 25.22),
            }
        }
        
        -- Interaction configuration.
        -- Ie moving dumpsters, bags, etc
        config.interactions = {
            -- Should the textUI be shown to stop moving/carrying the object
            showTextUI = true, -- boolean. Default: true
        
            -- The default key to stop moving/carrying the object.
            -- Users can change this on their side in the keybinds.
            defaultKey = "X", -- string. Default: "X"
        
            -- The target icons
            targetIcon = "fas fa-trash", -- string. Default: "fas fa-trash"
        
            -- The target distance
            targetDistance = 2, -- integer. Default: 2
        
            -- Array of controls to be disabled when moving/carrying the dumpsters.
            -- https://docs.fivem.net/docs/game-references/controls/
            -- Additionally, you can add more stuff to be disable (ie phone) to the `blockActions` function in bridge/hooks/client.lua
            disableDumpsterControls = { 21, 22, 23, 24, 25, 36, 44, 45, 263, 264, 73, 257 }, -- array. Default: { 21, 22, 23, 24, 25, 36, 44, 45, 263, 264, 73, 257 }
        
            -- Array of controls to be disabled when moving/carrying the bins.
            -- https://docs.fivem.net/docs/game-references/controls/
            -- Additionally, you can add more stuff to be disable (ie phone) to the `blockActions` function in bridge/hooks/client.lua
            disableBinControls = { 21, 22, 23, 24, 25, 36, 44, 45, 263, 264, 73, 257 }, -- array. Default: { 21, 22, 23, 24, 25, 36, 44, 45, 263, 264, 73, 257 }
        
            -- Array of controls to be disabled when moving/carrying the bags.
            -- https://docs.fivem.net/docs/game-references/controls/
            -- Additionally, you can add more stuff to be disable (ie phone) to the `blockActions` function in bridge/hooks/client.lua
            disableBagControls = { 23, 24, 25, 36, 44, 45, 263, 264, 73, 257 } -- array.  Default: { 23, 24, 25, 36, 44, 45, 263, 264, 73, 257 }
        }
        
        -- Group system configuration
        config.groupSystem = {
            -- Enable the group system, this will allow players to create groups and invite other players to them.
            enabled = true, -- boolean. Default: true
        
            -- The minimum grade that is required to create a group
            requiredGrade = 3, -- integer. Default: 3
        
            -- The maximum amount of players in a group.
            -- Highly recommended to not have this more than 4.
            maxAmount = 3 -- integer. Default: 3
        }
        
        -- Locker room config
        config.lockerRooms = {
            -- Enable the locker rooms & clothing functionality
            enabled = true, -- boolean. Default: true
        
            -- Blip configuration for the locker room.
            -- For colors & sprites see https://docs.fivem.net/docs/game-references/blips/
            blip = {
                -- Blip sprite
                sprite = 73, -- integer. Default: 318
        
                -- Blip color
                color = 2, -- integer. Default: 2
        
                -- Blip scale
                scale = 0.8, -- integer. Default: 0.8
            },
        
            -- Automatically sets the outfit when the player clocks on and resets it when they clock off.
            autoSetOutfit = false, -- boolean. Default: false
        
            -- Should the locker room & clock-in / group interactions be separated? This is useful if you are using an MLO with a locker room.
            separateLockers = false, -- boolean. Default: true
        
            -- This is used for autoSetOutfit and these are the outfits that will be set when the player clocks on.
            -- You can setup the outfits in data/outfits.lua
            defaultOutfits = {
                -- Default male outfit, this is the label from data/outfits.lua
                male = "Employee Uniform",  -- string. Default: "Employee Uniform"
                -- Default female outfit, this is the label from data/outfits.lua
                female = "Employee Uniform" -- string. Default: "Employee Uniform"
            },
        }
        
        
        -- truck return & unload blip configuration options.
        -- For colors & sprites see https://docs.fivem.net/docs/game-references/blips/
        config.blips = {
            returnPoints = {
                -- Blip sprite
                sprite = 318, -- integer. Default: 318
        
                -- Blip color
                color = 1, -- integer. Default: 2
        
                -- Blip scale
                scale = 0.8, -- integer. Default: 0.8
            },
        
            unloadPoints = {
                -- Blip sprite
                sprite = 318, -- integer. Default: 318
        
                -- Blip color
                color = 2, -- integer. Default: 2
        
                -- Blip scale
                scale = 0.8, -- integer. Default: 0.8
            }
        }
        
        -- Trucks configuration
        ---@type GarbageTruckConfigData[]
        config.trucks = {
            {
                -- Vehicle model to use for this garbage truck.
                -- IMPORTANT: MUST use backticks for the vehicle hash, e.g. `trash2`
                model = `trash2`,
        
                -- The display name of the truck used in menus and UI.
                label = "Jobuilt Trashmaster", -- string
        
                -- The description shown when selecting this truck.
                -- Optional
                description =
                "When style meets sanitation. The Jobuilt Trashmaster is the unsung hero of the streets - a rolling fortress of filth and forgotten dreams. Built to haul the city's nastiest secrets and crush anything dumb enough to get in its way, this beast proves that one man's trash is another man's heavy-duty masterpiece. Slow? Sure. Indestructible? Absolutely.", -- string
        
                -- URL to an image used to visually represent the truck in menus.
                -- This must be a direct image url (ends in .png/.jpg, etc)
                -- Optional
                image = "https://static.wikia.nocookie.net/gtawiki/images/2/2d/Trashmaster-GTAO-RGSC-Action.jpg", -- string
        
                -- Required job grade to spawn this truck.
                -- Set to 0 to allow all employees to use it.
                grade = 0, -- integer
        
                -- How much total trash this truck can hold.
                -- Each trash item adds weight. When this limit is reached,
                -- players won't be able to load more trash.
                capacity = 3000, -- integer
        
                -- How much money it costs to take this truck out.
                -- This is refunded when the truck is properly returned, if enabled.
                cost = 500, -- integer
        
                -- The pickup offset used when aligning dumpsters to the truck.
                -- Only change if your dumpster model isn't lining up correctly.
                offset = -5.57, -- integer
        
                -- Whether or not this truck uses forks to lift the dumpsters.
                -- currently only master2 supports this.
                front = false, -- boolean
        
                -- Which types of trash this vehicle can pick up.
                allowed = {
                    -- Can pick up trash bags
                    bags = true, -- boolean
        
                    -- Can pick up wheelie bins
                    bins = true, -- boolean
        
                    -- Can pick up whole dumpsters
                    dumpsters = true -- boolean
                },
        
                -- The map blip settings displayed when a player is using this truck.
                -- For colors & sprites see https://docs.fivem.net/docs/game-references/blips/
                blip = {
                    -- Blip sprite
                    sprite = 318, -- integer. Default: 318
        
                    -- Blip color
                    color = 2, -- integer. Default: 2
        
                    -- Blip scale
                    scale = 0.8, -- integer. Default: 0.8
        
                    -- Optional label override, by default uses the truck name.
                    -- label = "Garbage Truck", -- string. Default: "Garbage Truck"
                },
        
                -- Vehicle properties applied to the truck when it is spawned.
                -- You can use /getvehicleprops-garbage when in the truck to copy the table to your clipboard.
                -- This uses ox_lib's lib.getVehicleProperties() output structure:
                -- https://coxdocs.dev/ox_lib/Modules/VehicleProperties/Client#libgetvehicleproperties
                props = {}
            },
        }
    ```
  </Tab>

  <Tab value="locations.lua">
    ```lua
    --[[
        This file defines all garbage job clock-in locations and their configuration options.

        Each entry in this file represents a different work site where players can:
            - Clock in / clock out
            - Spawn truck points
            - Return truck points
            - Unload truck points
            - Access locker rooms (optional)
            - Receive job routes based on nearby zones

        You may freely add, remove, or edit locations to fit your server’s layout, custom MLOs,
        or gameplay design. Each location behaves independently and can have its own truck spawns,
        return areas, zones, and blip settings.

        ---------------------------------------------------------
        OPTION EXPLANATIONS
        ---------------------------------------------------------

        - coords
            The position (vec4) where the job ped will spawn.
            The ped is the main interaction point for starting & ending the job.

        - distance
            How far away the player must be before the ped is unloaded/loaded.
            Higher values = ped visible from farther away (slightly more performance cost).

        - minZones / maxZones
            Defines how many garbage zones the player must complete for this location.
            Each location can have different route lengths.

            Example:
                minZones = 4     → minimum of 4 stops
                maxZones = 8     → maximum of 8 stops

        - ped
            Configuration for the clock-in NPC.
                model      = Ped model hash (use backticks: `s_m_y_garbage`)
                scenario   = World scenario animation (NPC idle behavior)
                anim       = Optional custom animation (dict + clip)

            Use either "scenario" OR "anim".

        - vehicleSpawns
            A list of vec4 positions.
            When a player spawns a truck, the script checks each spot in order and uses the
            first empty one. Add as many as you like.

        - vehicleReturns
            Locations where players may return their truck (if manual returns are enabled).
            A simple vec3 is used since heading is not needed.

        - vehicleUnloads
            Locations where the truck unload animation & processing takes place.
            Add more to support multiple unloading stations.

        - lockers
            Optional locker room coordinates.
            Only used when `separateLockers = true` in the locker rooms section of the main config file.
            Allows you to place locker rooms away from clock-in peds (useful for MLOs).

        - blip
            Controls the map blip for the job location.
                enabled = true/false
                sprite  = Blip icon ID
                color   = Blip color ID
                scale   = Blip size
                label   = Name shown on the map

        - zones
            A list of valid GTA zone codes assigned to this location.
            These define where players will be sent to pick up garbage.
            Zones must match those listed in the Zones data file.

            Example:
                "DAVIS", "STRAW", "MORN", etc.

            You can restrict city locations to only city zones,
            and rural locations to rural zones.

        ---------------------------------------------------------
        ADDING NEW LOCATIONS
        ---------------------------------------------------------

        Simply copy an existing block, paste it underneath, and update:

            - coords
            - ped location
            - vehicle spawns / returns / unloads
            - zones list
            - blip label

        This allows unlimited job sites around the map (LS city, county, custom MLOs, etc.).

        ---------------------------------------------------------
        NOTES
        ---------------------------------------------------------

        - All vec3/vec4 positions can be collected using your favorite coord-grabber resource.
        - You can safely delete any location you do not want to use.
        - Each location can have different difficulty and zone ranges.
        - Blips are optional and can be disabled per-location.
        - Make sure zone names match exactly the ones defined in zones.lua.
    ]]

    return {
        { -- City location, in La Peurta
            -- Spawn coordinates of the ped.
            coords = vec4(-354.77, -1545.90, 27.72, 271.61), -- vector4

            -- The distance at which to load the ped in. Probably shouldn't touch this.
            distance = 100, -- integer.

            -- The minimum zones to complete.
            minZones = 4, -- integer

            -- The maximum zones to complete.
            maxZones = 8, -- integer.

            -- Ped configuration options.
            ped = {
                -- Ped model to spawn. Please note the usage of backticks (`) and not (") or (')
                model = `s_m_y_garbage`,

                -- Scenario to play on the ped.
                -- You MUST choose EITHER an animation OR a scenario to play.
                scenario = "WORLD_HUMAN_AA_SMOKE",

                -- animation instead of scenario.
                -- anim = { 
                --     clip = "animation_clip",
                --     dict = "animation_dict"
                -- }
            },

            -- All possible vehicle spawn locations, if a spot already has a vehicle in it then it'll use the next one.
            vehicleSpawns = {
                --- vector4
                vec4(-346.60, -1570.10, 24.94, 22.92),
                vec4(-316.15, -1539.22, 27.39, 336.40)
            },

            -- Possible locations that the vehicle can be returned at, if manual returns are enabled.
            vehicleReturns = {
                -- vector3
                vec3(-346.60, -1570.10, 24.94),
                vec3(-316.15, -1539.22, 27.39)
            },

            -- Possible locations that the vehicle can be unloaded at.
            vehicleUnloads = {
                -- vector3
                vec3(-352.61, -1558.93, 25.2)
            },

            -- this is only used if u have separateLockers enabled.
            lockers = {
                -- vector3
                vec3(-322.25, -1545.85, 31.02)
            },

            -- Blip configuration.
            -- For colors & sprites see https://docs.fivem.net/docs/game-references/blips/
            blip = {
                -- Enable or disable the blip.
                enabled = true, -- boolean.

                -- Blip Sprite
                sprite = 318, -- integer

                -- Blip Color
                color = 52, -- integer

                -- Blip Scale
                scale = 0.8, -- integer

                -- Blip Label
                label = "Garbage Job", -- string
            },

            -- The zones that will be chosen randomly for this location.
            -- This is used to, optionally, prevent players from being sent to the county from the cit and visa versa.
            -- The zone MUST exist in `data/zones.lua`.
            zones = {
                "CYPRE",
                "DAVIS",
                "STRAW",
                "KOREAT",
                "DELPE",
                "MORN",
                "BURTON",
                "WVINE",
                "HAWICK",
                "DTVINE",
                "MIRR",
                "RICHM",
                "BHAMCA",
                "CHU",
                "OBSERV",
                "TEXTI",
                "SKID"
            }
        },

        { -- Sandy Shores Location, at the recycling yard
            coords = vec4(2338.47, 3131.64, 48.21, 79.02),
            distance = 100,
            minZones = 2,
            maxZones = 5,
            ped = {
                model = `s_m_y_garbage`,
                scenario = "WORLD_HUMAN_AA_SMOKE",
            },
            vehicleSpawns = {
                vec4(2346.04, 3107.17, 48.23, 76.96),
                vec4(2341.34, 3153.32, 48.17, 123.11),
                vec4(2366.58, 3121.34, 48.43, 158.04)
            },
            vehicleReturns = {
                vec3(2367.56, 3139.97, 48.07)
            },
            vehicleUnloads = {
                vec3(2418.71, 3149.08, 48.04)
            },
            lockers = {
                vec3(2355.85, 3144.48, 48.21)
            },
            blip = {
                enabled = true,
                sprite = 318,
                color = 52,
                scale = 0.8,
                label = "Garbage Job",
            },
            zones = {
                "DESRT",
                "PALETO",
                "GRAPES",
                "SANDY",
                "HARMO"
            }
        },
    }
    ```
  </Tab>

  <Tab value="outfits.lua">
    ```lua
        --[[
            Employee Uniforms Configuration
        
            This file defines all available outfits.
            Outfits are separated by gender and labeled for easy reference.
        
            ---------------------------------------------------------
            OPTION EXPLANATIONS
            ---------------------------------------------------------
        
            grade
                - Number indicating the required job grade to use this outfit.
                - Example: 0 = basic employee, 3 = supervisor/advanced uniform.
        
            image
                - URL or path to an image representing the outfit (optional).
                - Useful for UI preview.
        
            description
                - description for the outfit (optional).
        
            clothing
                - Defines each clothing/prop slot for the ped.
                - drawable = model ID for the clothing/prop. Use -1 to leave the ped's current item unchanged.
                - texture  = variant of the drawable (0 is default).
                - Slots include:
                    - undershirt
                    - torso
                    - torso2
                    - shoes
                    - leg
                    - badge
                    - bag
                    - mask
                    - accessory
                    - kevlar
                    - watch
                    - hat
                    - glasses
                    - ears
                    - bracelets
        
            ---------------------------------------------------------
            ADDING NEW LOCATIONS
            ---------------------------------------------------------
        
            Simply copy an existing block, paste it underneath, and update:
        
                - label
                - grade (optional)
                - description (optional)
                - clothing
        
            This allows unlimited job sites around the map (LS city, county, custom MLOs, etc.).
        
            ---------------------------------------------------------
            NOTES
            ---------------------------------------------------------
            
            - Any slot omitted or set to { drawable = -1 } will not be changed when applying the outfit.
            - You can add more outfits by following this same structure.
            - Ensure names are unique per gender.
            - You can use the command /getclothing-garbage to copy your characters current clothing.
        ]]
        
        return {
            male = {
                ["Employee Uniform"] = {
                    grade = 0,
                    image = "",
                    description = "",
                    clothing = {
                        undershirt = { drawable = 59, texture = 0 },
                        torso = { drawable = 63, texture = 0 },
                        torso2 = { drawable = 56, texture = 0 },
                        shoes = { drawable = 24, texture = 0 },
                        leg = { drawable = 36, texture = 0 },
                        badge = { drawable = 0, texture = 0 },
                        bag = { drawable = 0, texture = 0 },
                        mask = { drawable = 0, texture = 0 },
                        accessory = { drawable = 0, texture = 0 },
                        kevlar = { drawable = 0, texture = 0 },
                        watch = { drawable = -1, texture = 0 },
                        hat = { drawable = -1, texture = 0 },
                        glasses = { drawable = -1, texture = 0 },
                        ears = { drawable = -1, texture = 0 },
                        bracelets = { drawable = -1, texture = 0 },
                    }
                },
                ["Employee Uniform w/ Jacket"] = {
                    grade = 3,
                    image = "",
                    description = "",
                    clothing = {
                        undershirt = { drawable = 59, texture = 0 },
                        torso = { drawable = 64, texture = 0 },
                        torso2 = { drawable = 57, texture = 0 },
                        shoes = { drawable = 24, texture = 0 },
                        leg = { drawable = 36, texture = 0 },
                        badge = { drawable = 0, texture = 0 },
                        bag = { drawable = 0, texture = 0 },
                        mask = { drawable = 0, texture = 0 },
                        accessory = { drawable = 0, texture = 0 },
                        kevlar = { drawable = 0, texture = 0 },
                        watch = { drawable = -1, texture = 0 },
                        hat = { drawable = -1, texture = 0 },
                        glasses = { drawable = -1, texture = 0 },
                        ears = { drawable = -1, texture = 0 },
                        bracelets = { drawable = -1, texture = 0 },
                    }
                },
            },
            female = {
                ["Employee Uniform"] = {
                    grade = 0,
                    image = "",
                    description = {},
                    clothing = {
                        undershirt = { drawable = 14, texture = 0 },
                        torso = { drawable = 83, texture = 0 },
                        torso2 = { drawable = 49, texture = 0 },
                        shoes = { drawable = 24, texture = 0 },
                        leg = { drawable = 35, texture = 0 },
                        badge = { drawable = 0, texture = 0 },
                        bag = { drawable = 0, texture = 0 },
                        mask = { drawable = 0, texture = 0 },
                        accessory = { drawable = 0, texture = 0 },
                        kevlar = { drawable = 0, texture = 0 },
                        watch = { drawable = -1, texture = 0 },
                        hat = { drawable = -1, texture = 0 },
                        glasses = { drawable = -1, texture = 0 },
                        ears = { drawable = -1, texture = 0 },
                        bracelets = { drawable = -1, texture = 0 },
                    }
                },
                ["Employee Uniform w/ Jacket"] = {
                    grade = 3,
                    image = "",
                    description = {},
                    clothing = {
                        undershirt = { drawable = 14, texture = 0 },
                        torso = { drawable = 83, texture = 0 },
                        torso2 = { drawable = 50, texture = 0 },
                        shoes = { drawable = 24, texture = 0 },
                        leg = { drawable = 35, texture = 0 },
                        badge = { drawable = 0, texture = 0 },
                        bag = { drawable = 0, texture = 0 },
                        mask = { drawable = 0, texture = 0 },
                        accessory = { drawable = 0, texture = 0 },
                        kevlar = { drawable = 0, texture = 0 },
                        watch = { drawable = -1, texture = 0 },
                        hat = { drawable = -1, texture = 0 },
                        glasses = { drawable = -1, texture = 0 },
                        ears = { drawable = -1, texture = 0 },
                        bracelets = { drawable = -1, texture = 0 },
                    }
                },
            }
        }
    ```
  </Tab>

  <Tab value="props.lua">
    ```lua
        --[[
            Garbage Objects Configuration
        
            This file defines all the trash objects that players can interact with in the garbage job.
            Objects are divided into three categories:
                - dumpsters
                - bins
                - bags
        
            Each entry defines the type of trash, how much trash it contains, and special behavior.
        
            ---------------------------------------------------------
            OPTION EXPLANATIONS
            ---------------------------------------------------------
                - minAmount / maxAmount
                    - The range of trash to collect from this object.
        
                - carryModel
                    - Only for bags. Defines the model that the player will carry when picking up the object.
        
                - offset
                    - Only for bags. Defines the position and rotation offsets for the carried model.
                    - loc = vec3(x, y, z) → position offset
                    - rot = vec3(x, y, z) → rotation offset
        
                - shouldDelete
                    - Boolean flag, only used in bags.
                    - If true, the object will be deleted after being picked up.
                    - Bags on the ground with other trash attached to them often need to be deleted, while dumpsters and bins usually remain.
        
            ---------------------------------------------------------
            NOTES
            ---------------------------------------------------------
        
            - Dumpsters and bins do not require offset or carryModel.
            - Bags usually require both offset and carryModel for proper attachment to the ped.
            - All props are referenced by their model name using backticks (`), not quotes.
            - This already includes every prop the game that functions cleanly, 
                - You can add the larger dumpsters however the truck w/ forks will not be able to pick them up and they will clip with the other trucks.
        ]]
        
        return {
            dumpsters = { -- These are dumpsters that you will pick up and move to the back or front of the truck to empty.
                [`prop_dumpster_01a`] = {
                    minAmount = 100,
                    maxAmount = 800,
                },
                [`prop_dumpster_02a`] = {
                    minAmount = 100,
                    maxAmount = 800,
                },
                [`m23_2_prop_m32_dumpster_01a`] = {
                    minAmount = 100,
                    maxAmount = 800,
                },
                [`prop_dumpster_02b`] = {
                    minAmount = 100,
                    maxAmount = 800,
                },
                [`prop_cs_dumpster_01a`] = {
                    minAmount = 100,
                    maxAmount = 800,
                },
            },
            bins = { -- These are bins that you will pick up and move to the back of the truck to empty.
                [`prop_cs_bin_01`] = {
                    minAmount = 100,
                    maxAmount = 600
                },
                [`prop_cs_bin_01_skinned`] = {
                    minAmount = 100,
                    maxAmount = 600
                },
                [`prop_snow_bin_02`] = {
                    minAmount = 100,
                    maxAmount = 600
                },
                [`prop_cs_bin_03`] = {
                    minAmount = 100,
                    maxAmount = 600
                },
                [`prop_bin_08open`] = {
                    minAmount = 100,
                    maxAmount = 600
                },
                [`prop_bin_08a`] = {
                    minAmount = 100,
                    maxAmount = 600
                },
            },
            bags = { -- These are bag props or props to grab a bag out of.
                [`prop_bin_01a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_11a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_09a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_02a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_06a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_04a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_07d`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_07b`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_11b`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_07c`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`prop_bin_01a_old`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = false,
                },
                [`hei_prop_heist_binbag`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = true,
                },
                [`p_binbag_01_s`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `p_binbag_01_s`,
                    offset = {
                        loc = vec3(0.39, -0.18, -0.01),
                        rot = vec3(-32.6, -71.10, 37.5)
                    },
                    shouldDelete = true,
                },
                [`prop_cs_street_binbag_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_cs_street_binbag_01`,
                    offset = {
                        loc = vec3(0.39, -0.18, -0.01),
                        rot = vec3(-32.6, -71.10, 37.5)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_01`,
                    offset = {
                        loc = vec3(0.33, -0.29, 0.17),
                        rot = vec3(-93.6, 0.0, 42.4)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_08`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_sd_01`,
                    offset = {
                        loc = vec3(0.38, -0.3, 0.07),
                        rot = vec3(-32.6, -71.10, 27.1)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_sd_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_sd_01`,
                    offset = {
                        loc = vec3(0.38, -0.3, 0.07),
                        rot = vec3(-32.6, -71.10, 27.1)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_06`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_01`,
                    offset = {
                        loc = vec3(0.33, -0.29, 0.17),
                        rot = vec3(-93.6, 0.0, 42.4)
                    },
                    shouldDelete = true,
                },
                [`prop_cs_rub_binbag_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_01`,
                    offset = {
                        loc = vec3(0.33, -0.29, 0.17),
                        rot = vec3(-93.6, 0.0, 42.4)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_04`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_04`,
                    offset = {
                        loc = vec3(0.02, -0.96, 0.17),
                        rot = vec3(-98.99, -0.02, -0.05)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_sd_02`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_sd_02`,
                    offset = {
                        loc = vec3(0.02, -0.96, 0.17),
                        rot = vec3(-98.99, -0.02, -0.05)
                    },
                    shouldDelete = true,
                },
                [`p_rub_binbag_test`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `p_rub_binbag_test`,
                    offset = {
                        loc = vec3(0.3, -0.35, 0.11),
                        rot = vec3(-98.99, -0.02, -0.05)
                    },
                    shouldDelete = true,
                },
                [`ng_proc_binbag_02a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `ng_proc_binbag_02a`,
                    offset = {
                        loc = vec3(0.4, -0.28, 0.04),
                        rot = vec3(-29.0, -100.51, 0.0)
                    },
                    shouldDelete = true,
                },
                [`bkr_prop_fakeid_binbag_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `bkr_prop_fakeid_binbag_01`,
                    offset = {
                        loc = vec3(0.54, -0.4, -0.03),
                        rot = vec3(-45.7, -97.3, 0.0)
                    },
                    shouldDelete = true,
                },
                [`ng_proc_binbag_01a`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `ng_proc_binbag_01a`,
                    offset = {
                        loc = vec3(0.4, -0.28, 0.04),
                        rot = vec3(-29.0, -100.51, 0.0)
                    },
                    shouldDelete = true,
                },
                [`ch_chint10_binbags_smallroom_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_01b`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `hei_prop_heist_binbag`,
                    offset = {
                        loc = vec3(0.09, -0.03, -0.01),
                        rot = vec3(-95.75, 0.0, 38.5)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_05`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_05`,
                    offset = {
                        loc = vec3(0.26, -0.64, -0.07),
                        rot = vec3(-72.6, -72.83, 0.3)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_03`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_05`,
                    offset = {
                        loc = vec3(0.26, -0.64, -0.07),
                        rot = vec3(-72.6, -72.83, 0.3)
                    },
                    shouldDelete = true,
                },
                [`prop_rub_binbag_03b`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_01`,
                    offset = {
                        loc = vec3(0.33, -0.29, 0.17),
                        rot = vec3(-93.6, 0.0, 42.4)
                    },
                    shouldDelete = true,
                },
                [`prop_id_rub_binbag_01`] = {
                    minAmount = 100,
                    maxAmount = 300,
                    carryModel = `prop_rub_binbag_01`,
                    offset = {
                        loc = vec3(0.33, -0.29, 0.17),
                        rot = vec3(-93.6, 0.0, 42.4)
                    },
                    shouldDelete = true,
                },
            }
        }
    ```
  </Tab>

  <Tab value="zone_names.lua">
    ```lua
        -- This file is purely to adjust the names of zones if you have customized them, chances are you will not need to edit anything in this file.
        {
            AIRP = "Los Santos International Airport",
            ALAMO = "Alamo Sea",
            ALTA = "Alta",
            ARMYB = "Fort Zancudo",
            BANHAMC = "Banham Canyon Dr",
            BANNING = "Banning",
            BAYTRE = "Baytree Canyon",
            BEACH = "Vespucci Beach",
            BHAMCA = "Banham Canyon",
            BRADP = "Braddock Pass",
            BRADT = "Braddock Tunnel",
            BURTON = "Burton",
            CALAFB = "Calafia Bridge",
            CANNY = "Raton Canyon",
            CCREAK = "Cassidy Creek",
            CHAMH = "Chamberlain Hills",
            CHIL = "Vinewood Hills",
            CHU = "Chumash",
            CMSW = "Chiliad Mountain State Wilderness",
            CYPRE = "Cypress Flats",
            DAVIS = "Davis",
            DELBE = "Del Perro Beach",
            DELPE = "Del Perro",
            DELSOL = "La Puerta",
            DESRT = "Grand Senora Desert",
            DOWNT = "Downtown",
            DTVINE = "Downtown Vinewood",
            EAST_V = "East Vinewood",
            EBURO = "El Burro Heights",
            ELGORL = "El Gordo Lighthouse",
            ELYSIAN = "Elysian Island",
            GALFISH = "Galilee",
            GALLI = "Galileo Park",
            GOLF = "GWC and Golfing Society",
            GRAPES = "Grapeseed",
            GREATC = "Great Chaparral",
            HARMO = "Harmony",
            HAWICK = "Hawick",
            HORS = "Vinewood Racetrack",
            HUMLAB = "Humane Labs and Research",
            JAIL = "Bolingbroke Penitentiary",
            KOREAT = "Little Seoul",
            LACT = "Land Act Reservoir",
            LAGO = "Lago Zancudo",
            LDAM = "Land Act Dam",
            LEGSQU = "Legion Square",
            LMESA = "La Mesa",
            LOSPUER = "La Puerta",
            MIRR = "Mirror Park",
            MORN = "Morningwood",
            MOVIE = "Richards Majestic",
            MTCHIL = "Mount Chiliad",
            MTGORDO = "Mount Gordo",
            MTJOSE = "Mount Josiah",
            MURRI = "Murrieta Heights",
            NCHU = "North Chumash",
            NOOSE = "N.O.O.S.E",
            OBSERV = "Galileo Observatory",
            OCEANA = "Pacific Ocean",
            PALCOV = "Paleto Cove",
            PALETO = "Paleto Bay",
            PALFOR = "Paleto Forest",
            PALHIGH = "Palomino Highlands",
            PALMPOW = "Palmer-Taylor Power Station",
            PBLUFF = "Pacific Bluffs",
            PBOX = "Pillbox Hill",
            PROCOB = "Procopio Beach",
            RANCHO = "Rancho",
            RGLEN = "Richman Glen",
            RICHM = "Richman",
            ROCKF = "Rockford Hills",
            RTRAK = "Redwood Lights Track",
            SANAND = "San Andreas",
            SANCHIA = "San Chianski Mountain Range",
            SANDY = "Sandy Shores",
            SKID = "Mission Row",
            SLAB = "Stab City",
            STAD = "Maze Bank Arena",
            STRAW = "Strawberry",
            TATAMO = "Tataviam Mountains",
            TERMINA = "Terminal",
            TEXTI = "Textile City",
            TONGVAH = "Tongva Hills",
            TONGVAV = "Tongva Valley",
            VCANA = "Vespucci Canals",
            VESP = "Vespucci",
            VINE = "Vinewood",
            WINDF = "Ron Alternates Wind Farm",
            WVINE = "West Vinewood",
            ZANCUDO = "Zancudo River",
            ZP_ORT = "Port of South Los Santos",
            ZQ_UAR = "Davis Quartz",
            PROL = "Prologue / North Yankton",
            ISHeist = "Cayo Perico Island"
        }
    ```
  </Tab>

  <Tab value="zones.lua">
    ```lua
        --[[
            This file defines all possible garbage collection zones and their configuration options.
        
            Each key corresponds to a valid GTA zone code (https://docs.fivem.net/docs/game-references/zones/), and the configuration inside
            controls how the job behave when assigned to that area.
        
            You can freely add, remove, or modify zones to match your server's design and balance.
        
            ---------------------------------------------------------
            OPTION EXPLANATIONS
            ---------------------------------------------------------
        
            Additionally, the "DAVIS" zone has comments outlining how to lay out the zones.
        
            - coords
                - The central location for the zone, this is currently just used for the map blip.
        
            - blip
                - The blip configuration info.
        
            - maxCollection
                - The maximum amount of trash that can be collected from this zone before moving to another.
        
            - repeatable
                - Whether the player can be assigned to this zone more than once in a single run.
        
            - trashYieldMultiplier
                - Modifies the base amount of trash generated from collected objects in this zone.
                Example: 1.5 = 50% more trash yield.
        
            - minTruckCapacity
                - The minimum truck capacity required for this zone to be assigned.
                (Useful for large dumpster-only or industrial zones.)
        
            - payoutMultiplier
                - Multiplies the final payout when players finish routes in this zone.
                Example: 1.2 = 20% more money.
        
            - allowedTypes
                - Determines what trash types are available to collect.
                Example:
                    allowedTypes = {
                        bags = true, -- ALlows players to grab bags
                        bins = true, -- Allows players to grab bins
                        dumpsters = false -- Disallows players to grab dumpsters
                    }
        
            - cooldown
                - Time (in seconds) before this zone can be re-assigned again to the same player/group.
        
            - itemRewards
                - Optional random item drops that can be given while collecting trash in this zone.
                Each entry supports:
                    item        = string    -- Item name.
                    chance      = integer   -- 0–100 percentage chance to roll.
                    amount      = number | {min, max} -- Amount or range.
                    metadata    = table     -- Optional metadata for inventories.
        
        
            
            -- Included Zones:
            
            "CYPRE"  - Cypress Flats
            "DAVIS"  - Davis
            "STRAW"  - Strawberry
            "KOREAT" - Little Seoul
            "DELPE"  - Del Perro
            "MORN"   - Morningwood
            "BURTON" - Burton
            "WVINE"  - West Vinewood
            "HAWICK" - Hawick
            "DTVINE" - Downtown Vinewood
            "MIRR"   - Mirror Park
            "RICHM"  - Richman
            "BHAMCA" - Banham Canyon
            "CHU"    - Chumash
            "HARMO"  - Harmony
            "SANDY"  - Sandy Shores
            "GRAPES" - Grapeseed
            "OBSERV"- Galileo Observatory
            "PALETO" - Paleto Bay
            "DESRT" - Grand Senora Desert
            "TEXTI"  - Textile City
            "SKID"   - Mission Row
        
            Each zone entry below should follow this structure:
            {
                maxCollection = number,
                repeatable = boolean,
                trashYieldMultiplier = number,
                minTruckCapacity = number,
                payoutMultiplier = number,
                allowedTypes = { bags = bool, bins = bool, dumpsters = bool },
                cooldown = number,
                itemRewards = {
                    { item = string, chance = number, amount = number|{min, max}, metadata = table? }
                }
            }
        ]]
        
        
        return {
            ['DAVIS'] = {
                -- Zone coordinates
                coords = vec3(101.01, -1859.0, 24.72),
        
                -- Blip configuration
                blip = {
                    sprite = 161,
                    color = 69,
                    scale = 3.0
                },
        
                -- The maximum amount of trash that can be collected from this zone before sending the player to the next one.
                maxCollection = 500,
        
                -- Should this zone be repeatable on the same trip? (Ie can the player be sent to this zone more than once per trip before unloading/clocking off.)
                repeatable = false,
        
                -- How much trash is generated per object collected here.
                -- Useful if you want different zones to yield different trash amounts.
                trashYieldMultiplier = 1.0,
        
                -- Whether this zone should be preferred for larger trucks.
                -- Example: large dumpsters only available in industrial areas.
                -- NOTE: If you do not have at least one truck with this capacity, then this zone will never be assigned.
                minTruckCapacity = 3000,
        
                -- Optional reward or payout multiplier (for high-effort zones like Paleto).
                payoutMultiplier = 1.0,
        
                -- The allowed types of trash that can be collected from this zone.
                allowedTypes = {
                    bags = true,
                    bins = true,
                    dumpsters = true,
                },
        
                -- Optional: cooldown before this zone can be assigned again (in seconds)
                cooldown = 600,
        
                -- Possible item rewards that this zone can drop, if enabled.
                itemRewards = {
                    {
                        -- Item name to give.
                        item = 'metalscrap', -- string
        
                        -- percentage (0-100) chance to roll this item
                        chance = 20, -- integer
        
                        -- The amount of items to give.
                        -- Can be either a single digit or a table of {minimumCount, maximumCount}
                        amount = {2, 6}, -- integer or {min, max}
        
                        -- optional metadata to pass to the inventory.
                        metadata = {}
                    },
                    { item = 'plastic', chance = 50, amount = {5, 10} },
                    { item = 'copper', chance = 100, amount = {5, 20} },
                    { item = 'ammo-9', chance = 30, amount = {20, 50} },
                    { item = 'ammo-rifle', chance = 10, amount = {10, 30} },
                    { item = 'WEAPON_APPISTOL', chance = 15, amount = 1 },
                    { item = 'WEAPON_SMG', chance = 10, amount = 1 },
                    { item = 'WEAPON_ASSAULTRIFLE', chance = 3, amount = 1 },
                }
            },
        }
    ```
  </Tab>
</Tabs>

## Bridge & Integration Configuration [#bridge--integration-configuration]

All of the framework and resource integrations can be found in the `bridge` directory, we expect you to have at least a basic understanding of Lua & how to integrate with other resources to edit these. Minimal support will be provided. If you have anything you want to recommend we integrate with, please let us know and we'll try our best to add it!

Included are about a dozen hook functions in the `bridge/hooks` directory, here you can integrate various functions.

## Locals / Language [#locals--language]

All of the respective language/locales & command names can be changed in the `locales` directory. Users can set their language via the `/ox_lib` command in-game if its enabled. If the language file doesn't exist, it defaults to English. You can set the default locale via `setr ox:locale en` convar in your server.cfg file. You can read more here: [https://coxdocs.dev/ox\_lib/Modules/Locale/Shared](https://coxdocs.dev/ox_lib/Modules/Locale/Shared)
