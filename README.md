<p align="center">
  <a href="https://horizontheme.com/">
    <img alt="horizon banner" src="https://i.imgur.com/pwBUCSe.png">
  </a>
</p>

---

<p align="center">
  <!-- marketplace version -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="marketplace version" src="https://img.shields.io/vscode-marketplace/v/jolaleye.horizon-theme-vscode.svg?maxAge=3600&style=for-the-badge&labelColor=1C1E26&color=F7B3A1">
  </a>
  <!-- downloads -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="downloads" src="https://img.shields.io/visual-studio-marketplace/d/jolaleye.horizon-theme-vscode.svg?maxAge=3600&style=for-the-badge&labelColor=1C1E26&color=F7B3A1">
  </a>
  <!-- rating -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="rating" src="https://img.shields.io/visual-studio-marketplace/stars/jolaleye.horizon-theme-vscode.svg?maxAge=86400&style=for-the-badge&labelColor=1C1E26&color=F7B3A1">
  </a>
</p>

<p align="center">
  <img alt="preview" src="https://raw.githubusercontent.com/jolaleye/horizon-theme-vscode/master/preview.png" width="90%">
</p>

## Fork Information

This fork holds my version of the Horizon theme.

Since the original Horizon is now archived, I have kept the original themes in tact for prosparity, and derived my own version of the theme from dark-italic.

**Note:** Only `horizon-clapton` will continue to be updated with new theming options as they appear, however updates will be slow. (~3-5 months).


## Installation

1. Go to the [**Releases**](https://github.com/uncleclapton/horizon-theme-vscode/releases) page
2. Download the latest `.visx` package
3. Open the **Command Palette** with `Ctrl+Shift+P` or `⇧⌘P`
4. Search for and run `Extensions: Install from VISX...`
5. Select the downloaded `.visx` package from the file browser.
6. Reload VSCode.
4. Open the **Command Palette** again with `Ctrl+Shift+P` or `⇧⌘P`
5. Select **Preferences: Color Theme** and choose a Horizon variant.
6. Enjoy! 🎉 Also, check out some of the personalization options below...

### Visit [horizontheme.com](https://horizontheme.com/) for some nice previews and a color reference :)

## Personalization

Tastes change all the time. Fortunately, VS Code makes it easy to customize just about every aspect of your editor.
If you want to change something, open the **Command Palette** and select **Preferences: Open Settings (JSON)**. Here, you can override VS Code's defaults or Horizon's colors.
Check out some of the personalization options below to customize Horizon to suit your taste.

_For more info on theming, visit the [Theme Authoring Guide](https://code.visualstudio.com/api/extension-capabilities/theming) and [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)._

### Contrast

To add a border between sections of the editor, add the following to your settings...

```
"workbench.colorCustomizations": {
  "contrastBorder": "#16161C"
}
```

Or for Bright variants...

```
"workbench.colorCustomizations": {
  "contrastBorder": "#1A1C231A"
}
```

### Italics

The normal theme only uses italics in a few places. If you would prefer no italics at all, you can configure this in your settings...

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "No italics",
      "scope": ["comment", "markup.quote", "variable.language", "variable.parameter"],
      "settings": {
        "fontStyle": "normal"
      }
    }
  ]
}
```

### Tag Brackets `<>`

For gray rather than red brackets around HTML tags...

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "Tag brackets",
      "scope": ["punctuation.definition.tag"],
      "settings": {
        "foreground": "#BBBBBB"
      }
    }
  ]
}
```

## Contributing

Check out the [contributing guide](CONTRIBUTING.md) to learn how you can report issues and help make changes.

Always be sure to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE) © [Jonathan Olaleye](https://github.com/jolaleye)
