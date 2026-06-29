# Troubleshooting (/docs/paid/police/troubleshooting)



# Complete Police System - Troubleshooting [#complete-police-system---troubleshooting]

Here's a list basic troubleshooting steps for TAM\_Police.

## OX Lib related problems [#ox-lib-related-problems]

* `ox_lib is missing, please ensure you have the latest version installed! \n https://github.com/communityox/ox_lib/releases/latest`
  * This means you don't have ox\_lib installed. Please install the latest release from [here](https://github.com/communityox/ox_lib/releases/latest)
* ox\_lib is outdated! Please ensure you upgrade to the latest version! \n [https://github.com/communityox/ox\_lib/releases/latest](https://github.com/communityox/ox_lib/releases/latest)
  * This means that your ox\_lib version is out of date. Please update it from [here](https://github.com/communityox/ox_lib/releases/latest)

## Resource Startup Errors [#resource-startup-errors]

* Resource must be named TAM\_Police to function properly! Aborting loadup.
  * You have renamed the resource. Please ensure that the resource name is exactly `TAM_Police` or else it wont work. This is cAsE sEnSiTiVe
* Error loading fxmanifest! Aborting loadup.
  * You have modified the fxmanifest.lua file and removed certain required fields. Please download the latest release from the [CFX Portal](https://portal.cfx.re) and replace the fxmanifest.lua file.
* Error loading Configuration. Please be sure that the config file exists and there aren't any syntax errors! Aborting loadup.
  * You messed up the `data/configuration.lua` file. This is usually related to a syntax error. Double check the file for any syntax errors or other mistakes.
* Error loading locales directory. Please be sure the en.json file exists! Aborting loadup.
  * The file `locales/en.json` is missing! This is required. If you wish to add more languages, please read [this](https://communityox.dev/ox_lib/Modules/Locale/Shared).
* Error loading UI! UI Not built! Aborting Loadup.
  * The UI hasn't been built or has been modified in some way. Please download the latest release from the [CFX Portal](https://portal.cfx.re) and replace the `web` directory.
* Error loading bridge module. Missing standalone bridge! Aborting loadup.
  * The bridge module has been messed up or is missing. Please download the latest release from the [CFX Portal](https://portal.cfx.re) and replace the `modules/bridge` directory.
* Error loading audio. AWC File not found! Aborting loadup.
  * The custom sound effects were unable to load. Please download the latest release from the [CFX Portal](https://portal.cfx.re) and replace the `audiodata` and `audiodirectory` directories.
* Missing dependency \<insert dependency here>
  * You are missing the respective dependency. Please read [this](../police/installation.mdx#install--setup-all-dependencies)

## X feature isn't working! [#x-feature-isnt-working]

Please be sure that you haven't disabled the feature entirely, some features are also dependent on a target or inventory system.
