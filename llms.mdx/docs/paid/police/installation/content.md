# Installation (/docs/paid/police/installation)





# Complete Police System - Installation [#complete-police-system---installation]

This will go over the installation guide for TAM\_Police. Please be sure to read this carefully and if you have any questions, feel free to ask in our Discord.

<Steps>
  <Step>
    ### Install & setup all dependencies [#install--setup-all-dependencies]

    * [ox\_lib](https://github.com/communityox/ox_lib/releases/latest)
    * Make sure your server artifacts version is `12000` or above. Downloaded the [Windows](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) or [Linux](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/) artifacts.
    * Make sure your game build is set to 2802 or higher. See how to set your gamebuild [here](https://forum.cfx.re/t/tutorial-forcing-gamebuilds-on-fivem/4784977).
    * Make sure your server is running OneSync (Formally Onesync Infinity) and **not** legacy. See how to enable onesync [here](https://forum.cfx.re/t/onesync-infinity-how-to-use-it/996612).
  </Step>

  <Step>
    ### Install optional dependencies [#install-optional-dependencies]

    * [ox\_target](https://github.com/communityox/ox_target/releases/latest) **This is optional, however some features will not work without it**
    * [ox\_inventory](https://github.com/communityox/ox_inventory/releases/latest) **This is optional, however some features will not work without it**
  </Step>

  <Step>
    ### Download the latest release from [CFX Portal](https://portal.cfx.re) [#download-the-latest-release-from-cfx-portal]
  </Step>

  <Step>
    ### (Required if using inventory) Add the items & images. [#required-if-using-inventory-add-the-items--images]

    Add the items from `_INSTALL/items/items.lua` to your `ox_inventory/data/items.lua` & the images from `_INSTALL/items/images` to the `ox_inventory/web/images` directory.
  </Step>

  <Step>
    ### Add the resources to your server.cfg (or resources.cfg) [#add-the-resources-to-your-servercfg-or-resourcescfg]
  </Step>

  <Step>
    ```bash
    start ox_lib
    start framework # the name of your framework (i.e. ND_Core, es_extended, qbx_core). This is not necessary if you are using standalone.
    start ox_target # Optional
    start ox_inventory # Optional
    start TAM_Police
    ```
  </Step>
</Steps>

## [Configuration](../police/configuration) [#configuration]

## [Developer Docs](../police/developers) [#developer-docs]

## [Troubleshooting](../police/troubleshooting) [#troubleshooting]
