# Choosing an IDE/Editor (/docs/tips/ide)



Before getting started on making a server or writing code, it's best that you choose an IDE/code editor that makes sense for what you are doing. In FiveM, the primary language you'll be interacting with is `lua`. `lua` is very beginner friendly and is easy to work with, that being said it's also supported in dozens of different code editors.

<Callout type="info">
  We highly discourage the use of Notepad or Notepad++ for editing code, Notepad++ *can* be fine for just editing simple config files but it still lacks the many features that a proper IDE has.
</Callout>

## Choosing an IDE [#choosing-an-ide]

Here's a list of our recommended IDEs and why:

### Zed [#zed]

[Zed](https://zed.dev) is a super light weight and extremely fast IDE build in [Rust](https://rust-lang.org/). It offers many advantages over alternatives like Visual Studio Code. Zed also has many features built directly into it rather than requiring extensions like Visual Studio Code does.

#### Recommended Extensions [#recommended-extensions]

* Git Firefly by d1y
  * Provides Git Syntax highlighting directly in-line
* SQL by nervenes, notpeter, phileix and tammyxiong
  * SQL language support, this is useful if you are working with SQL files.
* Lua by Max Brunsfeld
  * Provides syntax highlighting for the Lua language and adds the Lua Language Server (LLS) to Zed.
* XML by sweetppro
  * Provides syntax support for XML/Meta files. This is useful if you are working with those files.
* Color Highlight by Jason Lee
  * Shows colors directly in the editor, like HEX or RGB.
* HTML by Issac Clayton
  * Provides support for HTML, useful if you are working with NUI.

#### Recommended Settings [#recommended-settings]

* Git Blame
  ```json
  "git": {
      "inline_blame": {
          "enabled": true,
      },
  },
  ```

* Diagnostics (Like ErrorLens)
  ```json
  "diagnostics": {
      "inline": {
          "enabled": true,
          "max_severity": null, // same values as the `diagnostics_max_severity` from the editor settings
      }
  },
  ```

* Lua Language Server Settings
  <Callout type="info">
    We Highly recommend using per-project configs via `.luarc.json` files. You can read how to setup the [fivem-lls-addon here](https://github.com/overextended/fivem-lls-addon)
  </Callout>
  ```json
  "lsp": {
      "lua-language-server": {
      "settings": {
          "Lua": {
          "runtime": {
              "version": "Lua54",
              "nonstandardSymbol": [
              "/**/",
              "`",
              "+=",
              "-=",
              "*=",
              "/=",
              "<<=",
              ">>=",
              "&=",
              "|=",
              "^="
              ],
              "special": {
              "lib.load": "require"
              },
              "pathStrict": true,
              "plugin": "path/to/fivem-lls-addon/plugin.lua" // https://github.com/overextended/fivem-lls-addon
          },
          "diagnostics": {
              "disable": [
              "lowercase-global",
              "undefined-field",
              "undefined-global",
              "missing-parameter",
              "param-type-mismatch",
              "err-nonstandard-symbol",
              "unknown-symbol",
              "exp-in-action",
              "malformed-number",
              "no-visible-label",
              "miss-end",
              "duplicate-doc-field"
              ],
              "severity": {
              "duplicate-set-field": "Hint",
              },
          },
          "workspace": {
              "checkThirdParty": false,
              "ignoreDir": [
              ".vscode",
              ".github",
              ".git",
              "**/node_modules",
              "node_modules",
              "\\[cfx\\]",
              "\\[cfx-default\\]",
              ],
              "library": [
              "path/to/fivem-lls-addon/library", // FiveM LLS addon - https://github.com/overextended/fivem-lls-addon
              "path/to/fivem-lls-addon/library/runtime", // FiveM LLS addon - https://github.com/overextended/fivem-lls-addon
              "path/to/fivem-lls-addon/library/natives/CFX-NATIVE", // FiveM LLS addon - https://github.com/overextended/fivem-lls-addon
              "path/to/fivem-lls-addon/library/natives/GTAV", // FiveM LLS addon - https://github.com/overextended/fivem-lls-addon
              "path/to/ox_types/types", // ox_types, useful for working with Overextended resources - https://github.com/overextended/ox_types
              "path/to/ox_lib", // ox_lib type/formating support - https://github.com/overextended/ox_lib
              ],
          },
          },
      },
      },
  }
  ```

### Visual Studio Code [#visual-studio-code]

Visual Studio Code is the most popular IDE, however its much slower than Zed, takes up more resources and requires more extensions to have a proper developer experience. I'd highly recommend switching to and/or using Zed instead.

#### Recommended Extensions [#recommended-extensions-1]

* Lua Language Server by sumneko
  * Adds proper lua syntax highlighting and support for the Lua Language Server (LLS)
* Error Lens by Alexander
  * In-line hightlighting of error, warning and other language diagnostics
* TODO Highlight by Wayou Liu
  * Highlight TODOs, FIXMEs, and any keywords, annotations...
