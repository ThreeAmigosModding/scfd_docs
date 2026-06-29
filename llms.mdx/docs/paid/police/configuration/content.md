# Configuration (/docs/paid/police/configuration)



# Complete Police System - Configuration [#complete-police-system---configuration]

On this page we will go over how to configure TAM\_Police. All configuration files are in the `data/` directory.
If you need any assistance or have any questions, please join our [Discord](https://discord.gg/YzC4Du7WY) for support.

## Main Configuration [#main-configuration]

The primary configuration file is `data/configuration.lua`. Here you will find all of the primary configuration options.

```lua
config.enableVersionCheck = true -- Should we check for updates on startup.

config.debug = true -- Enables various debug commands.

config.logger = true -- Enable or disable lib.logger support. 

config.useInventory = true -- This is required for most evidence to work & for any of the item checks to function.

config.checkDuty = true -- Require that a player is onDuty before allowing them to interact.

config.groups = { -- Groups & grades
    -- groupName = groupGrade
    police = 0,
}

config.dutySystem = {
    enabled = true, -- Enables the duty system. This allows players to to go on and off duty by interacting with a ped via third eye.
    target = {
        enabled = true, -- Enable or disable the target.
        icon = "fas fa-clipboard-user", -- Font awesome icon.
        distance = 1.5 -- Interact distance.
    },
    commandEnabled = false, -- enable or disable the duty commands.
}

config.fines = {
    enabled = true, -- enables or disables the fining system.
    maxAmount = 5000, -- Maximum amount that a player can be fined.
    minAmount = 100, -- Minimum amount that a player can be fined.
    command = {
        enabled = true, -- Enables or disables the fine command.
        distance = 2 -- The distance to check nearby players from.
    },
    target = {
        enabled = true, -- Enables or disables the target
        icon = "fas fa-file-invoice-dollar", -- Font awesome icon
        distance = 2 -- Interact distance.
    }
}

config.jailing = {
    enabled = true, -- Enables or disables the jailing system. This currently only integrates with your framework or picke_prisons/xt-prison. You can add more in the bridge files.
    minTime = 5, -- Minimum time in seconds that a player can be jailed for.
    maxTime = 300, -- Maximum time in seconds that a player can be jailed for.
    requireCuffed = true, -- Require the player to be cuffed to jail
    command = {
        enabled = true, -- Enable the jailing command.
        distance = 2 -- The distance to check for nearby players.
    },
    target = {
        enabled = true, -- Enable the target to jail another player.
        icon = "fas fa-user-lock", -- Font awesome icon.
        distance = 2 -- Interact distance
    }
}

config.alertPeds = {
    enabled = true, -- Enables or disables the "Alert Police" peds that can spawn at stations.
    cooldown = 60, -- Time in seconds before someone can alert police again.
    target = { -- Target is the only way to interact with these, we plan on adding more ways to in the future.
        icon = 'fa-solid fa-bell', -- Font awesome icon.
        distance = 3 -- Interact Distance
    }
}

config.interactions = {
    enabled = true, -- Enable the various interactions
    cuffs = {
        enabled = true, -- Enable cuff system
        enableExports = true, -- Enable or disable exports - This is ignored if Config.useInventory is set to true.
        requireDuty = { -- Require duty for specific tasks.
            cuff = true,
            uncuff = false,
            ziptie = false,
            unziptie = false,
        },
        requireHandsUp = false, -- Should players be required to have their hands up in order be cuffed ?
        cuffItem = "handcuffs", -- Item required to cuff players. Set to false for no restriction. ie "handcuffs"
        unCuffItem = "handcuffkeys", -- Item required to un-cuff players. Set to false for no restriction. ie "handcuffkeys"
        zipTieItem = "zipties", -- Item required to zip-tie players. ie "zipties"
        unZipItem = {"cutters", "wirecutters"}, -- Item(s) require to un-zip-tie players. ie "wirecutters" | {"cutters", "wirecutters"}
        target = {
            enabled = true, -- Enable target to cuff / ziptie / uncuff players
            icon = "fas fa-handcuffs", -- Font awesome icon
            distance = 1.5 -- Interact distance
        },
        command = {
            enabled = true, -- Enable command to cuff / ziptie / uncuff players
            distance = 2 -- Distance to check for nearby players.
        },
    },
    escorting = {
        enabled = true, -- Enable the escort system.
        requireCuffed = true, -- Should players be required to be cuffed in order to be escorted? This will still play the cuffed animation if disabled due to limitations.
        allowDead = false, -- Should players be able to escort a dead player? This will still play the cuffed animation due to limitations.
        requireDuty = true, -- Should players need to be on duty to escort another player?
        target = {
            enabled = true, -- Enable target to escort / seat into vehicles
            icon = "fas fa-hands-bound", -- Font awesome icon
            seatIcon = "fas fa-right-to-bracket", -- Font awesome icon for putting players in a vehicle.
            distance = 1.5 -- Interact distance
        },
        command = {
            enabled = true, -- Enable command to escort / seat into vehicles
            distance = 2.0 -- Distance to check for nearby players.
        },
        keybind = {
            enabled = true, -- Enable the keybind to toggle escorting a player.
            defaultKey = "G", -- The default key to toggle escorting a nearby player.
            defaultMapper = "KEYBOARD", -- default key mapper to toggle escorting a nearby player, ie controller keybind.
            secondaryKey = nil, -- Secondary key to toggle escorting a nearby player, ie controller keybind.
            secondaryMapper = nil -- Secondary key mapper to toggle escorting a nearby player, ie controller keybind.
        }
    },
    searching = {
        enabled = true, -- Enable the ability to search other players.
        requireCuffed = true, -- Should a player need to be cuffed to be searched
        allowDead = false, -- Should players be able to search other players while dead.
        requireDuty = true, -- Should players need to be on duty to search another player.
        target = {
            enabled = true, -- Enable target to search players
            icon = "fas fa-magnifying-glass", -- Font awesome icon
            distance = 1.5 -- Interact distance
        },
        command = {
            enabled = true, -- Enable command to search players
            distance = 2.0 -- The distance to check for nearby players.
        }
    }
}

config.handsUp = {
    enabled = true, -- Enables the hands up module.
    keybinds = {
        enabled = true, -- enables or disable the keybinds.
        hu = "X", -- Hands up key.
        huk = "LSHIFT", -- Hands up on knees modifier. Ie you'd hold LSHIFT + X to get on your knees with your hands up
        huh = "LCONTROL" -- Hands on head modifier. Ie you'd hold LCONTROL + X to put your hands on the back of your head.
    },
    enableCommands = true -- Enable the commands.
}

config.spikeStrips = {
    enabled = true, -- Enable or disable the spike strips
    maxCount = 5, -- Maximum spike strip size.
    itemName = "spikestrip", -- spike strip item name.
    target = {
        enabled = true, -- Enable/disable target pickup
        icon = "fas fa-road-spikes", -- Font awesome icon
        distance = 2 -- Interaction distance
    },
    command = {
        enabled = true, -- Enable/disable the commands to place/pickup the spikes
        distance = 2.5 -- Distance to check to pickup a spike strip.
    },
    progressBar = {
        type = 'circle', -- Progress type. "circle" | "bar"
        duration = math.random(1000, 5000), -- The time to pickup / place. Supports numbers or math.random(minimum, maximum)
        dict = "amb@prop_human_bum_bin@idle_b", -- Animation dict to play
        clip = "idle_d" -- Animation clip to play.
    },
}

config.armories = {
    enabled = true, -- Should we enable the armory module?
    useInventory = false, -- Should we use the ox_inventory armory (shops) module instead? If you use this, you will need to define the shops in the `data/shops.lua` file of ox_inventory.
    enablePeds = true, -- Should we enable peds or just use target?
    target = { -- Interact method via target. This is currently the only way to open the armory. We will be adding support for other methods in the future.
        enabled = true, -- Enable or disable the target.
        icon = "fas fa-gun", -- Font awesome icon
        distance = 3, -- Interact distance
        drawSprite = false -- Draw sprite, this is ignored if enablePeds = true.
    }
}

config.cloakRooms = {
    enabled = true, -- Should we enable cloak rooms?
    icon = "fas fa-shirt", -- Icon to use across UI for the cloak rooms.
    keybind = { 
        enabled = true, -- Enable / disable the keybind interaction method.
        key = 38, -- Interaction key. Default is E
        radius = 5 -- The radius around the point to check for keybind press.
    },
    target = {
        enabled = false, -- Enable the target interaction.
        icon = "fas fa-shirt", -- Font awesome icon.
        distance = 3, -- Distance to interact
        drawSprite = false, -- Draw a sprite.
    }
}

config.garages = {
    enabled = true, -- Should we enable the garage system?
    teleport = true, -- Should we teleport the player into the car?
    returnEnabled = true, -- Should we allow players to return their vehicles.
    target = { -- The target interaction method. This is currently the only way to interact with the garages, we will be adding support for other methods in the future.
        enabled = true, -- Enable or disable the peds to interact with via target.
        icon = "fas fa-warehouse", -- Font awesome icon
        distance = 2 -- Interact distance
    },
    keybind = { -- Garage keybind. Players will return vehicles via this keybind
        key = 38, -- Interaction key. Default is E
        radius = 5 -- Radius around the point.
    }
}

config.sinks = {
    enabled = true, -- Allows players to wash evidence off of their hands. (Ie blood & GSR)
    props = { -- The list of sink props. Please note the usage of backticks (`) and not (") or (')
        `prop_bar_sink_01`,
        `prop_ff_sink_02`,
        `prop_sink_04`,
        `v_res_mbsink`,
        `prop_sink_06`,
        `prop_sink_02`
    },
    progressBar = {
        type = 'circle', -- Progress bar type. "circle" | "bar"
        duration = math.random(5000, 10000), -- Progress bar duration in seconds. Supports a number or math.random(minimumTime, maximumTime)
        animation = { -- Animation to play while washing hands.
            dict = "missheist_agency3aig_23",
            clip = "urinal_sink_loop"
        }
    },
    target = {
        icon = 'fas fa-hands-bubbles', -- Font awesome icon
        distance = 2 -- Distance
    }
}

config.tintMeter = {
    enabled = true, -- Enable or disable the tint meter
    UIEnabled = true, -- Enable or disable the tint meter UI
    progressBar = {
        type = 'circle', -- Progress bar type. "circle" | "bar"
        duration = math.random(3000, 7000), -- Progress bar duration in seconds. Supports a number or math.random(minimumTime, maximumTime)
        clip = 'cellphone_text_read_base', -- Animation clip to play while washing hands.
        dict = 'cellphone@' -- Animation dict to play while washing hands.
    },
    target = {
        enabled = true, -- Enable or disable the target system
        icon = 'fas fa-car-side', -- Font awesome icon
        distance = 2, -- Interact distance
        bones = { 'door_dside_f', 'seat_dside_f', 'door_pside_f', 'seat_pside_f' } -- Vehicle bones where you can interact with. Can do bones = false to allow the entire vehicle.
    },
    commands = {
        enabled = true, -- Enable or disable the commands
        distance = 2 -- Distance to check nearby vehicles.
    }
}

config.tackle = {
    enabled = true, -- Should we enable the tackle system.
    notify = true, -- Should we notify when someone tackles you?
    ragdollDuration = 5000, -- Time in milliseconds that a player should ragdoll for after being tackled.
    command = {
        enabled = false, -- enable / disable the tackle command.
        distance = 1.6 -- Distance to check for nearby player.
    },
    keybind = {
        enabled = true, -- Should the keybind be enabled?
        defaultKey = "G", -- Default Key. Ref: https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/
        defaultMapper = 'KEYBOARD', -- Key Mapper ID. Ref: https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/
        secondaryKey = nil, -- If you want to specify a controller keybind. Ref: https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/
        secondaryMapper = nil, -- If you want to specify a controller keybind. Ref: https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/
    },
    target = {
        enabled = true, -- Should we enable tackling via target?
        icon = "fas fa-user-ninja", -- Target icon.
        distance = 2.0 -- Target interact distance.
    },
    animation = {
        timeout = 15000, -- timeout to load animation in ms
        tacklerDict = "missmic2ig_11", -- anim dict that the tackler will play
        tacklerClip = "mic_2_ig_11_intro_goon", -- anim clip that the tackler will play
        tackleeDict = "missmic2ig_11", -- anim dict that the tacklee will play
        tackleeClip = "mic_2_ig_11_intro_p_one", -- anim clip that the tacklee will play
    }
}

config.objects = { -- Objects are specified in the `data/data_objects.lua` file.
    enabled = true, -- Enable the object spawning system
    useItems = false, -- Enable this to utilize items instead of a menu or commands.
    progressBar = {
        type = 'circle', -- Progress bar type. "circle" | "bar"
        duration = 2500,  -- Progress bar duration in seconds. Supports a number or math.random(minimumTime, maximumTim
        useWhileDead = false, -- block the ability to use while dead
        canCancel = true, -- Can cancel the progress bar
        disable = { -- Disable various inputs
            car = true,
            move = true,
            combat = true,
            mouse = false
        },
        anim = { -- Animation to play
            dict = 'anim@narcotics@trash',
            clip = 'drop_front'
        }
    },
    target = {
        enabled = true, -- Enable the target interaction to pickup objects.
        icon = 'fas fa-boxes-stacked', -- Font awesome icon
        distance = 2, -- Interact distance
    },
    commands = {
        enabled = true, -- Enable the commands to spawn & delete objects, you can specify them in `data/data_objects.lua`
        distance = 2 -- Distance to check for nearby objects.
    }
}

config.menu = {
    enabled = true, -- Enable or disable the radial menu.
    icon = "fas fa-building-shield", -- Font awesome Icon
    options = { -- Menu options.
        {
            id = 'panicButton', -- Unique ID for the option.
            icon = 'bell', -- Font awesome icon name.
            label = 'Panic Button', -- Label
            event = 'TAM_Police:triggerPanicButton', -- The event to trigger
        },
        {
            id = 'policeInteractions',
            icon = 'list-check',
            label = 'Police Interactions',
            items = { -- Items for sub-menu
                {
                    id = 'escort',
                    icon = 'user-group',
                    label = 'Escort Player',
                    event = 'TAM_Police:escortPlayer',
                },
                {
                    id = 'search',
                    icon = 'magnifying-glass',
                    label = 'Search Player',
                    event = 'TAM_Police:searchPlayer',
                },
                {
                    id = 'jail',
                    icon = 'user-lock',
                    label = 'Jail Player',
                    event = 'TAM_Police:sendToJail',
                },
            },
        },
        {
            id = 'policeObjects',
            icon = 'road',
            label = 'Police Objects',
            items = {
                {
                    id = 'cone', -- Unique ID
                    icon = 'triangle-exclamation', -- Font awesome Icon
                    label = 'Cone', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Cone', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'roadsign', -- Unique ID
                    icon = 'sign-hanging', -- Font awesome Icon
                    label = 'Road Sign', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Roadsign', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'barrier', -- Unique ID
                    icon = 'torii-gate', -- Font awesome Icon
                    label = 'Police Barrier', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Police Barrier', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'tent', -- Unique ID
                    icon = 'campground', -- Font awesome Icon
                    label = 'Tent', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Tent', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'whiteboard', -- Unique ID
                    icon = 'chalkboard', -- Font awesome Icon
                    label = 'Whiteboard', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Whiteboard', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'pinboard', -- Unique ID
                    icon = 'thumbtack', -- Font awesome Icon
                    label = 'Pinboard', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Pinboard', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'worklight', -- Unique ID
                    icon = 'lightbulb', -- Font awesome Icon
                    label = 'Worklight', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Worklight', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'worklight', -- Unique ID
                    icon = 'lightbulb', -- Font awesome Icon
                    label = 'Worklight', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Worklight', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'chair', -- Unique ID
                    icon = 'chair', -- Font awesome Icon
                    label = 'Chair', -- Menu label
                    event = 'TAM_Police:spawnObject', -- event to trigger
                    args = 'Chair', -- Arguments to pass through the event. In this case, it is the object name.
                },
                {
                    id = 'deleteObject',
                    icon = 'trash',
                    label = 'Delete Object',
                    event = 'police:client:deleteObject',
                },
            }
        }
    }
}
```

## Evidence Configuration [#evidence-configuration]

The evidence config file is found in `data/config_evidence.lua` and contains all of the configuration for evidence.

```lua
evidenceConfig.GSR = {
    enabled = true, -- Enable or disable the GSR system.
    validGloves = {}, -- Comma-sperated list of drawable variation ids for gloves.
    clearTime = 2880, -- Time in seconds it takes for the GSR to clear.
    clearWaterTime = 30, -- Time in seconds it takes for the GSR to clear off while in water.
    enableSinks = true, -- Can a player wash their hands in a sink to clear the GSR?
    target = {
        enabled = true, -- Enable the target interaction to check a player for GSR
        icon = "fas fa-gun", -- Font awesome icon
        distance = 1.5, -- Interact Distance
        items = false, -- set to nil if not using inventory. An item, array of items, or pairs of items-count required to show the option.
        anyTime = true -- Only require a single item from the items table above to exist.    
    },
    progressBar = {
        type = 'circle', -- Progress bar type. "cirlce" | "bar"
        duration = math.random(3000, 7000), -- Time in seconds that the progress bar lasts. Supports a number or math.random(minTime, maxTime)
        clip = 'cellphone_text_read_base', -- Animation clip
        dict = 'cellphone@' -- Animation dict
    },
    command = {
        enabled = true, -- Enable the command interaction to check a player for GSR
        distance = 2 -- Distance to check for nearby players.
    },
    ignoredWeps = { -- Weapons that should be ignored for GSR. Please note the usage of backticks (`) and not (") or (')
        `weapon_raypistol`,
        `weapon_stungun_mp`,
        `weapon_flaregun`,
        `weapon_stungun`,
        `weapon_raycarbine`,
        `weapon_railgun`,
        `weapon_railgunxm3`,
        `weapon_rayminigun`,
        `weapon_firework`,
        `weapon_compactlauncher`,
        `weapon_rpg`,
        `weapon_grenadelauncher`,
        `weapon_grenadelauncher_smoke`,
        `weapon_grenade`,
        `weapon_bzgas`,
        `weapon_molotov`,
        `weapon_stickybomb`,
        `weapon_proxmine`,
        `weapon_snowball`,
        `weapon_pipebomb`,
        `weapon_ball`,
        `weapon_smokegrenade`,
        `weapon_flare`,
        `weapon_acidpackage`,
        `weapon_petrolcan`,
        `weapon_fireextinguisher`,
        `weapon_hazardcan`,
        `weapon_fertilizercan`,
        `weapon_dagger`,
        `weapon_bat`,
        `weapon_bottle`,
        `weapon_crowbar`,
        `weapon_unarmed`,
        `weapon_flashlight`,
        `weapon_golfclub`,
        `weapon_hammer`,
        `weapon_hatchet`,
        `weapon_knuckle`,
        `weapon_knife`,
        `weapon_machete`,
        `weapon_switchblade`,
        `weapon_nightstick`,
        `weapon_wrench`,
        `weapon_battleaxe`,
        `weapon_poolcue`,
        `weapon_stone_hatchet`,
        `weapon_candycane`
    }
}

evidenceConfig.BAC = {
    enabled = true, -- Enable or disable the BAC System
    UIEnabled = true, -- Enable or disable the UI.
    UIDisplayTime = 5000, -- How long it should take for the UI to go away.
    clearInterval = 720, -- How long until each point wears off.
    clearPoint = 0.01, -- The amount to loose per interval above
    itemName = "breathalyzer", -- The item name to use if using inventory.
    autoDetect = true, -- Should we automatically detect & set BAC levels based off of emotes.
    emotes = { -- These are emote names setup to automatically add BAC level when used. Setup default to rp-emotes
        --["emoteName"] = level_to_add
        ["party"] = 0.02,
        ["whiskey"] = 0.03,
        ["whiskeyb"] = 0.04,
        ["whiskeyb2"] = 0.04,
        ["whiskeyb3"] = 0.04,
        ["beer"] = 0.02,
        ["beer2"] = 0.02,
        ["beer3"] = 0.02,
        ["beer5"] = 0.02,
        ["beerf"] = 0.02,
        ["beerf2"] = 0.02,
        ["beerf3"] = 0.02,
        ["beerf4"] = 0.02,
        ["beerf5"] = 0.02,
        ["beercan"] = 0.02,
        ["beercan2"] = 0.02,
        ["beercan3"] = 0.02,
        ["dancedrink"] = 0.03,
        ["dancedrink2"] = 0.03,
        ["dancedrink3"] = 0.03,
        ["dancedrink4"] = 0.03,
        ["dancedrink5"] = 0.03,
        ["dancedrink6"] = 0.02,
        ["dancedrink7"] = 0.02,
        ["dancedrink8"] = 0.02,
        ["dancedrink9"] = 0.02,
        ["wine"] = 0.02,
        ["wine2"] = 0.02,
        ["wine3"] = 0.02
    },
    target = {
        enabled = true, -- Enable the target interaction to breathalyze a player.
        icon = "fas fa-beer-mug-empty", -- Font awesome icon
        distance = 1.5, -- Interact Distance
    },
    command = {
        enabled = true, -- Enable the command to breathalyze a player
        distance = 2, -- The distance to check for nearby players
    },
    progressBar = {
        type = 'circle', -- Progress bar type. "cirlce" | "bar"
        duration = math.random(3000, 7000), -- Time in seconds that the progress bar lasts. Supports a number or math.random(minTime, maxTime)
        clip = 'cellphone_text_read_base', -- Animation clip
        dict = 'cellphone@' -- Animation dict
    },
}

evidenceConfig.Casings = {
    enabled = false, -- Enable the bullet casings. This requires the usage of an inventory
    target = {
        drawSprite = true, -- Draw sprites
        icon = "fas fa-magnifying-glass" -- Font awesome icon.
    },
    ammoTypes = { -- The ammo types.
        ['ammo-22'] = { -- Ammo ID
            label = '.22 LR', -- Ammo label
            weight = 1, -- The weight
            projectile = 'projectile-ammo-22', -- Projectile name
            casing = 'casing-ammo-22' -- Casing name
        },
        ['ammo-38'] = {
            label = '.38 LC',
            weight = 3,
            projectile = 'projectile-ammo-38',
            casing = 'casing-ammo-38'
        },
        ['ammo-44'] = {
            label = '.44 Magnum',
            weight = 3,
            projectile = 'projectile-ammo-44',
            casing = 'casing-ammo-44'
        },
        ['ammo-50'] = {
            label = '.50 AE',
            weight = 4,
            projectile = 'projectile-ammo-50',
            casing = 'casing-ammo-50'
        },
        ['ammo-heavysniper'] = {
            label = '.50 BMG',
            weight = 5,
            projectile = 'projectile-ammo-heavysniper',
            casing = 'casing-ammo-heavysniper'
        },
        ['ammo-musket'] = {
            label = '.50 Ball',
            weight = 3,
            projectile = 'projectile-ammo-musket',
            casing = false
        },
        ['ammo-rifle'] = {
            label = '5.56x45mm',
            weight = 2,
            projectile = 'projectile-ammo-rifle',
            casing = 'casing-ammo-rifle'
        },
        ['ammo-rifle2'] = {
            label = '7.62x39mm',
            weight = 2,
            projectile = 'projectile-ammo-rifle2',
            casing = 'casing-ammo-rifle2'
        },
        ['ammo-shotgun'] = {
            label = '12 Gauge Buckshot',
            weight = 4,
            projectile = false,
            casing = 'casing-ammo-shotgun'
        },
        ['ammo-sniper'] = {
            label = '7.62x51mm',
            weight = 4,
            projectile = 'projectile-ammo-sniper',
            casing = 'casing-ammo-sniper'
        },
        ['ammo-9'] = {
            label = '9mm',
            weight = 2,
            projectile = 'projectile-ammo-9',
            casing = 'casing-ammo-9'
        },
        ['ammo-45'] = {
            label = '.45 ACP',
            weight = 2,
            projectile = 'projectile-ammo-45',
            casing = 'casing-ammo-45'
        },
        ['ammo-380'] = {
            label = '.380 ACP',
            weight = 1,
            projectile = 'projectile-ammo-380',
            casing = 'casing-ammo-380'
        },
        ['ammo-41'] = {
            label = '.41 Remington Magnum',
            weight = 2,
            projectile = 'projectile-ammo-41',
            casing = 'casing-ammo-41'
        },
    }
}
```

## Locker Room Configuration [#locker-room-configuration]

The locker room configuration consists of two different files, the outfits located in `data/data_outfits.lua` and the configuration located in `data/config_outfits.lua`

Configuration:

```lua
return {
    {
        id = 'stationId', -- A unique identifier.
        label = "Locker Room", -- Label
        coords = vec3(-443.928, 6007.664, 32.228), -- The coords to load the zone in at.
        distance = 5, -- The distance around the zone
        blip = {
            enabled = false, -- Enable or disable blips
            sprite = 73, -- Blip sprite
            color = 12, -- Blip color
            scale = 0.8, -- Blip scale
            label = "Locker Room", -- Blip label
            onlyNearby = true, -- Should we only display the blip when players are nearby.
        },
        options = { -- Locker options
            {
                name = 'Patrol Locker', -- The name of the locker
                id = 'station_patrol_locker', -- A unique identifier to assign to the locker
                description = 'View the Patrol Locker!', -- Description to assign to the option in the menu.
                outfits = { -- The outfits to list under the locker.
                    {
                        name = "Patrol Class A", -- Outfit name
                        image = false, -- Optionally an image to display on the menu.
                        groups = false, -- Groups, can be false or a table of group = grade. Ie { police = 0, swat = 4 }
                        clothing = outfits.patrol_outfit -- The outfit ID from `data/data_outfits.lua`
                    },
                    
                }
            }
        }
    },
}
```

Outfits:

You can quickly get your current outfit by running the command `/getclothing`, this will copy it to your clipboard so you can paste it here.

```lua
outfits.patrol_outfit = { -- The outfit ID. This is used when specifying the clothing option for outfits.
    male = { -- Male clothes.
        undershirt = { drawable = 262, texture = 1 },
        mask = { drawable = 121, texture = 0 },
        torso = { drawable = 86, texture = 0 },
        torso2 = { drawable = 576, texture = 0 },
        badge = { drawable = 0, texture = 0 },
        bag = { drawable = 148, texture = 0 },
        shoes = { drawable = 109, texture = 1 },
        accessory = { drawable = 275, texture = 0 },
        kevlar = { drawable = 105, texture = 0 },
        leg = { drawable = 208, texture = 0 },
        watch = { drawable = -1, texture = -1 },
        hat = { drawable = -1, texture = -1 },
        glasses = { drawable = -1, texture = -1 },
        ears = { drawable = -1, texture = -1 },
        bracelets = { drawable = -1, texture = -1 },
    },
    female = { -- Female clothes
        undershirt = { drawable = 304, texture = 0 },
        mask = { drawable = 0, texture = 0 },
        torso = { drawable = 0, texture = 0 },
        torso2 = { drawable = 617, texture = 0 },
        badge = { drawable = 0, texture = 0 },
        bag = { drawable = 116, texture = 0 },
        shoes = { drawable = 163, texture = 0 },
        accessory = { drawable = 208, texture = 0 },
        kevlar = { drawable = 0, texture = 0 },
        leg = { drawable = 222, texture = 0 },
        watch = { drawable = -1, texture = -1 },
        hat = { drawable = -1, texture = -1 },
        glasses = { drawable = -1, texture = -1 },
        ears = { drawable = -1, texture = -1 },
        bracelets = { drawable = -1, texture = -1 },
    }
}

-- If you want to add more options, just duplicate it and change the id. Ie:


-- outfits.patrol_outfit2 = { -- The outfit ID. This is used when specifying the clothing option for outfits.
--     male = { -- Male clothes.
--         ...
--     },
--     female = { -- Female clothes
--         ...
--     }
-- }

-- If you want to only change certain clothing items, you can just omit the option from the clothing list or set it to -1. Ie:

-- male = { -- Male clothes, this will only change the accessory.
--     accessory = { drawable = 275, texture = 0 },
-- },
-- female = { -- Female clothes, this will only change the hat.
--     undershirt = { drawable = -1, texture = 0 },
--     mask = { drawable = -1, texture = 0 },
--     torso = { drawable = -1, texture = 0 },
--     torso2 = { drawable = -1, texture = 0 },
--     badge = { drawable = -1, texture = 0 },
--     bag = { drawable = -1, texture = 0 },
--     shoes = { drawable = -1, texture = 0 },
--     accessory = { drawable = -1, texture = 0 },
--     kevlar = { drawable = -1, texture = 0 },
--     leg = { drawable = -1, texture = 0 },
--     watch = { drawable = -1, texture = -1 },
--     hat = { drawable = 16, texture = 3 },
--     glasses = { drawable = -1, texture = -1 },
--     ears = { drawable = -1, texture = -1 },
--     bracelets = { drawable = -1, texture = -1 },
-- }
```

## Shotspotter Configuration [#shotspotter-configuration]

The shotspotter configuration can be found in the `data/config_shotspotter.lua` file.

```lua
shotSpotterConfig.enabled = true -- Enable the shot spotter module

shotSpotterConfig.debug = false -- Should we display zones on the map.

shotSpotterConfig.cooldown = 5 -- Time in minutes until the shot spotter can be triggered again.

shotSpotterConfig.alertDelay = 10 -- Time in seconds until the shot spotter sends the alert

shotSpotterConfig.radius = 500 -- Radius around each shot spotter.

shotSpotterConfig.jobCheck = false -- Should we check for jobs.

shotSpotterConfig.ignoredJobs = { -- Jobs to ignore.
    "police"
}

shotSpotterConfig.blips = {
    enabled = true,
    sprite = 313,
    color = 1,
    scale = 0.8,
    label = "Shotspotter",
}

shotSpotterConfig.locations = {
    vec3(653.42, -648.74, 57.18), -- Los Santos Fwy
    vec3(1015.98, -255.25, 85.58), -- Glory Way
    vec3(329.99, 288.96, 120.10), -- Clinton Ave
    vec3(-202.76, -327.34, 66.04), -- Las Lagunas Blvd
    vec3(31.32, -875.29, 31.46), -- Power St
    vec3(70.1372, -1718.3291, 34.2056), -- Carson Ave
    vec3(1196.9178, -1624.6641, 50.3403), -- Fudge Ln
    vec3(-852.9095, -1215.8782, 9.2463), -- Palimino Ave
    vec3(-932.7648, -448.8844, 42.9436), -- Movie Star Way
    vec3(-1713.6848, 478.4267, 130.3795), -- Ace Jones Dr
    vec3(-596.5602, 515.0753, 109.675), -- Picture Perfect Dr
    vec3(716.6274, -1958.7434, 44.7564), -- Popular St
    vec3(-1889.92, -351.62, 49.31), -- Playa Vista
    vec3(-978.85, -2089.64, 10.19), -- Greenwich Parkway
    vec3(-1169.81, -2763.41, 13.95), -- Runway 1
    -- vec3(-96.09, 6377.95, 31.48), -- Paleto Blvd
    -- vec3(1415.54, 2695.04, 37.42), -- Route 68
    -- vec3(-3069.58, 735.29, 21.70), -- Great Ocean Hwy
    -- vec3(-2729.48, 3.24, 15.51), -- Great Ocean Hwy
    vec3(74.06, -2644.79, 21.90), -- Elysian Fields Fwy
    vec3(984.14, -3117.20, 5.90), -- Buccaneer Way
    vec3(236.19, 1240.05, 229.83), -- Baytree Canyon Road
    -- vec3(1806.03, 3705.84, 33.96), -- Zancudo Ave
    -- vec3(1702.34, 4881.44, 42.03), -- Grapeseed Main St
    -- vec3(2868.15, 3567.91, 53.38), -- Senora Fwy
    -- vec3(2566.92, 383.00, 108.46),-- Palimino Fwy
    vec3(1358.59, -942.04, 69.29), -- Palimino Fwy
    vec3(-1591.69, -1140.81, 2.15), -- Red Desert Ave
    -- vec3(-2380.90, 2136.90, 88.54),-- Tongva Hills
    -- vec3(375.02, 2778.28, 55.97) -- Route 68 / Joshua
}

shotSpotterConfig.ignoredWeps = {
    `weapon_raypistol`,
    `weapon_stungun_mp`,
    `weapon_flaregun`,
    `weapon_stungun`,
    `weapon_raycarbine`,
    `weapon_railgun`,
    `weapon_railgunxm3`,
    `weapon_rayminigun`,
    `weapon_firework`,
    `weapon_compactlauncher`,
    `weapon_rpg`,
    `weapon_grenadelauncher`,
    `weapon_grenadelauncher_smoke`,
    `weapon_grenade`,
    `weapon_bzgas`,
    `weapon_molotov`,
    `weapon_stickybomb`,
    `weapon_proxmine`,
    `weapon_snowball`,
    `weapon_pipebomb`,
    `weapon_ball`,
    `weapon_smokegrenade`,
    `weapon_flare`,
    `weapon_acidpackage`,
    `weapon_petrolcan`,
    `weapon_fireextinguisher`,
    `weapon_hazardcan`,
    `weapon_fertilizercan`,
    `weapon_dagger`,
    `weapon_bat`,
    `weapon_bottle`,
    `weapon_crowbar`,
    `weapon_unarmed`,
    `weapon_flashlight`,
    `weapon_golfclub`,
    `weapon_hammer`,
    `weapon_hatchet`,
    `weapon_knuckle`,
    `weapon_knife`,
    `weapon_machete`,
    `weapon_switchblade`,
    `weapon_nightstick`,
    `weapon_wrench`,
    `weapon_battleaxe`,
    `weapon_poolcue`,
    `weapon_stone_hatchet`,
    `weapon_candycane`
}

shotSpotterConfig.suppressors = {
    `COMPONENT_AT_PI_SUPP_02`, -- Pistol, Pistol Mk2, SNS Pistol Mk2.
    `COMPONENT_AT_PI_SUPP`, -- Combat Pistol, AP Pistol, Heavy Pistol, Vintage Pistol, SMG, SMG Mk2, Machine Pistol.
    `COMPONENT_AT_AR_SUPP_02`, -- .50 Pistol, Micro SMG, Assault SMG, Bullpup Shotgun, Heavy Shotgun, Assault Rifle, Special Carbine, Special Carbine Mk2, Assault Rifle Mk2, Sniper Rifle.
    `COMPONENT_AT_AR_SUPP`, -- Assault Shotgun, Combat Shotgun, Carbine Rifle, Advanced Rifle, Bullpup Rifle, Bullpup Rifle Mk2, Carbine Rifle Mk2, Military Rifle, Marksman Rifle Mk2, Marksman Rifle.
    `COMPONENT_AT_SR_SUPP` -- Pump Shotgun.
}
```

## Armory Configuration [#armory-configuration]

The armory config file can be found in `data/data_armories.lua`. You can quickly get your current loadout by running `/getloadout`, this will copy the information to your clipboard to paste into the file.

<Callout type="warning">
  In order for addon weapons to work with the `/getloadout` command, you need to add them to `data/data_weapons.lua` and their components if they have any to `data/data_components.lua`
</Callout>

```lua
return {
    {
        shopType = "PoliceArmory", -- Ox inventory shop type if you're using their shop functions.
        id = 1, -- Ox inventory shop ID if you're using their shop functions.
        coords = vec3(361.171, -1601.652, 29.307), -- Armory coords
        distance = 100, -- Distance to load in at.
        ped = { -- Ped configuration
            model = `S_M_M_AmmuCountry`, -- Ped model
            scenario = "WORLD_HUMAN_CLIPBOARD", -- Ped scenario. Also supports animations.
            coords = vec3(361.171, -1601.652, 29.307), -- Ped coords
            heading = 231.808, -- Ped heading
        },
        blip = { -- Blip configuration
            enabled = false, -- Enable or disable the blips for armories
            sprite = 110, -- Blip sprite
            color = 12, -- Blip color
            scale = 0.8, -- Blip scale
            label = "Armory", -- Blip Label
            onlyNearby = true, -- Should we only display the blip when nearby.
        },
        loadouts = { -- Loadout options
            {
                id = "pd_patrol_loadout", -- Unique ID for the loadoout option
                name = 'Patrol Loadout', -- Loadout name
                optionLabel = "View Patrol Loadout", -- Loadout option Label
                optionDescription = 'View the Patrol weapon loadout!', -- Loadout option description
                weapons = { -- Loadout weapons
                    -- { name = "Weapon Name", weapon = `weapon hash`, ammo = ammoAmount, components = { `comma`, `seperated`, `list`, `of`, `component`, `hashes`}, tint = tintNumber },
                    { name = "Flashlight", weapon = -1951375401, ammo = 100, components = { }, tint = 0 },
                    { name = "Combat Pistol", weapon = 1593441988, ammo = 100, components = { 119648377, 899381934 }, tint = 0 },
                    { name = "Stungun", weapon = 911657153, ammo = 100, components = { }, tint = 0 },
                    { name = "Pump Shotgun", weapon = 487013001, ammo = 100, components = { 2076495324 }, tint = 0 },
                    { name = "Carbine MkII", weapon = -86904375, ammo = 100, components = { 1283078430, -1654288262, 2076495324 }, tint = 0 },
                    { name = "Road Flares", weapon = 1233104067, ammo = 100, components = { }, tint = 0 },
                    { name = "Jerry Can", weapon = 883325847, ammo = 100, components = { }, tint = 0 },
                    { name = "Fire Extinguisher", weapon = 101631238, ammo = 100, components = { }, tint = 0 },
                }
            },

            -- To add more options, just copy the table like this:

            -- {
            --     id = "pd_patrol_loadout2", -- Unique ID for the loadoout option
            --     name = 'Patrol Loadout', -- Loadout name
            --     optionLabel = "View Patrol Loadout", -- Loadout option Label
            --     optionDescription = 'View the Patrol weapon loadout!', -- Loadout option description
            --     weapons = { -- Loadout weapons
            --         -- { name = "Weapon Name", weapon = `weapon hash`, ammo = ammoAmount, components = { `comma`, `seperated`, `list`, `of`, `component`, `hashes`}, tint = tintNumber },
            --         { name = "Flashlight", weapon = -1951375401, ammo = 100, components = { }, tint = 0 },
            --         { name = "Combat Pistol", weapon = 1593441988, ammo = 100, components = { 119648377, 899381934 }, tint = 0 },
            --     }
            -- },
        }
    },

    -- To add more armories, just copy the above table like this:

    -- {
    --     shopType = "PoliceArmory", -- Ox inventory shop type if you're using their shop functions.
    --     id = 1, -- Ox inventory shop ID if you're using their shop functions.
    --     coords = vec3(361.171, -1601.652, 29.307), -- Armory coords
    --     distance = 100, -- Distance to load in at.
    --     ped = { -- Ped configuration
    --         model = `S_M_M_AmmuCountry`, -- Ped model
    --         scenario = "WORLD_HUMAN_CLIPBOARD", -- Ped scenario. Also supports animations.
    --         coords = vec3(361.171, -1601.652, 29.307), -- Ped coords
    --         heading = 231.808, -- Ped heading
    --     },
    --     blip = { -- Blip configuration
    --         enabled = false, -- Enable or disable the blips for armories
    --         sprite = 110, -- Blip sprite
    --         color = 12, -- Blip color
    --         scale = 0.8, -- Blip scale
    --         label = "Armory", -- Blip Label
    --         onlyNearby = true, -- Should we only display the blip when nearby.
    --     },
    --     loadouts = { -- Loadout options
    --         {
    --             id = "pd_patrol_loadout", -- Unique ID for the loadoout option
    --             name = 'Patrol Loadout', -- Loadout name
    --             optionLabel = "View Patrol Loadout", -- Loadout option Label
    --             optionDescription = 'View the Patrol weapon loadout!', -- Loadout option description
    --             weapons = { -- Loadout weapons
    --                 -- { name = "Weapon Name", weapon = `weapon hash`, ammo = ammoAmount, components = { `comma`, `seperated`, `list`, `of`, `component`, `hashes`}, tint = tintNumber },
    --                 { name = "Flashlight", weapon = -1951375401, ammo = 100, components = { }, tint = 0 },
    --                 { name = "Combat Pistol", weapon = 1593441988, ammo = 100, components = { 119648377, 899381934 }, tint = 0 },
    --                 { name = "Stungun", weapon = 911657153, ammo = 100, components = { }, tint = 0 },
    --                 { name = "Pump Shotgun", weapon = 487013001, ammo = 100, components = { 2076495324 }, tint = 0 },
    --                 { name = "Carbine MkII", weapon = -86904375, ammo = 100, components = { 1283078430, -1654288262, 2076495324 }, tint = 0 },
    --                 { name = "Road Flares", weapon = 1233104067, ammo = 100, components = { }, tint = 0 },
    --                 { name = "Jerry Can", weapon = 883325847, ammo = 100, components = { }, tint = 0 },
    --                 { name = "Fire Extinguisher", weapon = 101631238, ammo = 100, components = { }, tint = 0 },
    --             }
    --         },

    --         -- To add more options, just copy the table like this:

    --         -- {
    --         --     id = "pd_patrol_loadout2", -- Unique ID for the loadoout option
    --         --     name = 'Patrol Loadout', -- Loadout name
    --         --     optionLabel = "View Patrol Loadout", -- Loadout option Label
    --         --     optionDescription = 'View the Patrol weapon loadout!', -- Loadout option description
    --         --     weapons = { -- Loadout weapons
    --         --         -- { name = "Weapon Name", weapon = `weapon hash`, ammo = ammoAmount, components = { `comma`, `seperated`, `list`, `of`, `component`, `hashes`}, tint = tintNumber },
    --         --         { name = "Flashlight", weapon = -1951375401, ammo = 100, components = { }, tint = 0 },
    --         --         { name = "Combat Pistol", weapon = 1593441988, ammo = 100, components = { 119648377, 899381934 }, tint = 0 },
    --         --     }
    --         -- },
    --     }
    -- },
}
```

## Object Configuration [#object-configuration]

The object list configuration file can be found in `data/data_objects.lua`.

```lua
return {
    -- ["Object Name"] = { -- The name in the menu
    --     command = "command_name_to_spawn_object", -- Command to spawn object
    --     model = `object_model_name`, -- Object model to spawn
    --     freeze = true, -- Should an object be frozen?
    --    vehicleShouldAvoid = false, -- Should AI traffic try and reroute around the objects?
    -- },

    ["Police Barrier"] = { -- The name in the menu
        command = "barrier", -- Command to spawn object
        model = `prop_barrier_work05`, -- Object model to spawn
        freeze = false, -- Should an object be frozen?
        vehicleShouldAvoid = true, -- Should AI traffic try and reroute around the objects?
    },
    ["Roadsign"] = { -- The name in the menu
        command = "roadsign", -- Command to spawn object
        model = `prop_snow_sign_road_06g`, -- Object model to spawn
        freeze = false, -- Should an object be frozen?
        vehicleShouldAvoid = true, -- Should AI traffic try and reroute around the objects?
    },
    ["Cone"] = { -- The name in the menu
        command = "cone", -- Command to spawn object
        model = `prop_roadcone02a`, -- Object model to spawn
        freeze = false, -- Should an object be frozen?
        vehicleShouldAvoid = true, -- Should AI traffic try and reroute around the objects?
    },
    ["Tent"] = { -- The name in the menu
        command = "tent", -- Command to spawn object
        model = `prop_gazebo_03`, -- Object model to spawn
        freeze = true, -- Should an object be frozen?
        vehicleShouldAvoid = false, -- Should AI traffic try and reroute around the objects?
    },
    ["Whiteboard"] = { -- The name in the menu
        command = "whiteboard", -- Command to spawn object
        model = `prop_w_board_blank`, -- Object model to spawn
        freeze = true, -- Should an object be frozen?
        vehicleShouldAvoid = false, -- Should AI traffic try and reroute around the objects?
    },
    ["Pinboard"] = { -- The name in the menu
        command = "pinboard", -- Command to spawn object
        model = `vw_prop_vw_board_01a`, -- Object model to spawn
        freeze = true, -- Should an object be frozen?
        vehicleShouldAvoid = false, -- Should AI traffic try and reroute around the objects?
    },
    ["Worklight"] = { -- The name in the menu
        command = "worklight", -- Command to spawn object
        model = `prop_worklight_03b`, -- Object model to spawn
        freeze = true, -- Should an object be frozen?
        vehicleShouldAvoid = false, -- Should AI traffic try and reroute around the objects?
    },
    ["Chair"] = { -- The name in the menu
        command = "chair", -- Command to spawn object
        model = `prop_chair_08`, -- Object model to spawn
        freeze = true, -- Should an object be frozen?
        vehicleShouldAvoid = false, -- Should AI traffic try and reroute around the objects?
    },
}
```

## Ped Configuration [#ped-configuration]

The ped configuration file can be found in `data/data_peds.lua` and includes all of the duty peds or alert peds.

```lua
return {
    {
        type = "alert", -- The type of ped: "alert" | "duty"
        coords = vec3(-1403.4, -560.99, 30.19), -- Spawn coordinates of the ped
        distance = 100, -- The distance at which to load the ped in.
        ped = {
            model = `S_M_Y_XMech_01`, -- Ped model to spawn. Please note the usage of backticks (`) and not (") or (')
            scenario = "WORLD_HUMAN_CLIPBOARD", -- Scenario to play on the ped.
            -- anim = { -- You can also specify an animation instead of scenario.
            --     clip = "animation_clip",
            --     dict = "animation_dict"
            -- }
        },
        blip = {
            enabled = false, -- Enable or disable the blip.
            sprite = 357, -- Blip Sprite
            color = 3, -- Blip Color
            scale = 0.8, -- Blip Scale
            label = "Front Desk Ped", -- Blip Label
            onlyNearby = false, -- Should we only display the blip when a player is within the distance specified above?
        },
    },
    {
        type = "duty",
        coords = vec3(-1403.4, -556.99, 30.19),
        distance = 100,
        ped = {
            model = `S_M_Y_XMech_01`,
            scenario = "WORLD_HUMAN_CLIPBOARD",
        },
        blip = {
            enabled = false,
            sprite = 357,
            color = 3,
            scale = 0.8,
            label = "Go On Duty",
            onlyNearby = false,
        },
    }
}
```

## Garage Configuration [#garage-configuration]

The garage configuration file can be found in `data/data_garages.lua` and includes all of the garages & their vehicles.

You can copy your current vehicles information to your clipboard to paste it in this file via the command `/getvehprops`

```lua
    {
        coords = vec3(-485.026, 5982.255, 31.423), -- Coords for the zone,
        distance = 50, -- Zone load distance,
        ped = { -- Ped configuration
            model = `S_M_Y_XMech_01`, -- Ped model
            scenario = "WORLD_HUMAN_CLIPBOARD", -- Ped scenario
            coords = vec3(-485.026, 5982.255, 31.423), -- Ped coords
            heading = 280.14, -- Ped heading
            -- anim = { -- You can also specify an animation instead of scenario.
            --     clip = "animation_clip",
            --     dict = "animation_dict"
            -- }
        },
        returnConfig = { -- Return position
            coords = vec3(-466.614, 5971.854, 31.423), -- Return coords
            radius = 4 -- Radius around the coords.
        },
        blip = { -- Blip
            enabled = false,
            sprite = 357,
            color = 3,
            scale = 0.8,
            label = "Vehicle Garage",
            onlyNearby = false,
        },
        garages = { -- Garages available at this location
            {
                name = 'Patrol Fleet', -- Garage name
                id = "paleto_patrol", -- Unique ID for the garage.
                optionLabel = "View Patrol Fleet", -- Garage option label
                optionDescription = 'View the Patrol vehicle fleet!', -- Garage option description
                vehicles = { -- Vehicles available at this garage
                    {
                        name = "Vehicle Name",
                        model = `spawncode`,
                        spawnCoords = vec3(-482.089569, 5983.217285, 31.123310), -- Coords to spawn the vehicle at,
                        heading = 225, -- Heading for the vehicle.
                        groups = { -- group & minimum grade required to have this vehicle.
                            police = 4
                        },
                        vehProps = {...} -- Vehicle Props
                    }
                }
            }
        }
    },
```

## Bridge & Integration Configuration [#bridge--integration-configuration]

All of the framework and resource integrations can be found in the `bridge` directory, we expect you to have atleast a basic understanding of Lua & how to integrate with other resources to edit these. Minimal support will be provided. If you have anything you want to recommend we integrate with, please let us know and we'll try our best to add it!

## Locals / Language [#locals--language]

All of the respective language/locales & command names can be changed in the `locales` directory.

Users can set their language via the `/ox_lib` command in-game if its enabled. If the language file doesn't exist, it defaults to English.
