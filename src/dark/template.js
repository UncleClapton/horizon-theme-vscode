module.exports = {
  "name": "{{ name }}",
  "type": "dark",
  "colors": {
    "focusBorder": "{{ ui.border }}",
    "foreground": "{{ ui.lightText }}",
    "widget.shadow": "{{ ui.shadow }}",
    "selection.background": "{{ ui.accentAlt }}{{ alpha.med }}",
    "errorForeground": "{{ ui.negative }}",
    "textLink.activeForeground": "{{ ui.secondaryAccent }}",
    "textLink.foreground": "{{ ui.secondaryAccentAlt }}",
    "button.background": "{{ ui.accent }}",
    "dropdown.background": "{{ ui.backgroundAlt }}",
    "dropdown.listBackground": "{{ ui.accent }}",
    "input.background": "{{ ui.accent }}",
    "inputOption.activeBorder": "{{ ui.secondaryAccent }}{{ alpha.med }}",
    "inputValidation.errorBackground": "{{ ui.negative }}{{ alpha.med }}",
    "inputValidation.errorBorder": "{{ ui.negative }}{{ alpha.none }}",
    "scrollbar.shadow": "{{ ui.shadow }}",
    "scrollbarSlider.activeBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "scrollbarSlider.background": "{{ ui.accentAlt }}{{ alpha.low }}",
    "scrollbarSlider.hoverBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "badge.foreground": "{{ ui.lightText }}",
    "badge.background": "{{ ui.accent }}",
    "progressBar.background": "{{ ui.secondaryAccentAlt }}",
    "list.activeSelectionBackground": "{{ ui.accent }}{{ alpha.med }}",
    "list.activeSelectionForeground": "{{ ui.lightText }}",
    "list.dropBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "list.focusBackground": "{{ ui.accent }}{{ alpha.med }}",
    "list.focusForeground": "{{ ui.lightText }}",
    "list.highlightForeground": "{{ ui.secondaryAccentAlt }}",
    "list.hoverBackground": "{{ ui.accent }}{{ alpha.med }}",
    "list.hoverForeground": "{{ ui.lightText }}",
    "list.inactiveSelectionBackground": "{{ ui.accent }}{{ alpha.medLow }}",
    "list.inactiveSelectionForeground": "{{ ui.lightText }}",
    "list.inactiveFocusBackground": "{{ ui.accent }}{{ alpha.med }}",
    "list.errorForeground": "{{ ui.negative }}{{ alpha.high }}",
    "list.warningForeground": "{{ ui.warning }}{{ alpha.highMed }}",
    "activityBar.background": "{{ ui.background }}",
    "activityBar.dropBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "activityBar.foreground": "{{ ui.lightText }}{{ alpha.highMed }}",
    "activityBarBadge.background": "{{ ui.secondaryAccentAlt }}",
    "activityBarBadge.foreground": "{{ ui.darkText }}",
    "sideBar.background": "{{ ui.background }}",
    "sideBar.foreground": "{{ ui.lightText }}{{ alpha.med }}",
    "sideBar.dropBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "sideBarSectionHeader.background": "{{ ui.background }}",
    "sideBarSectionHeader.foreground": "{{ ui.lightText }}{{ alpha.highMed }}",
    "editorGroup.border": "{{ ui.border }}",
    "editorGroup.dropBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "editorGroupHeader.tabsBackground": "{{ ui.background }}",
    "tab.border": "{{ ui.background }}{{ alpha.none }}",
    "tab.activeBorder": "{{ ui.secondaryAccentAlt }}",
    "tab.inactiveBackground": "{{ ui.background }}",
    "editor.background": "{{ ui.background }}",
    "editorLineNumber.foreground": "{{ ui.lightText }}{{ alpha.low }}",
    "editorLineNumber.activeForeground": "{{ ui.lightText }}{{ alpha.med }}",
    "editorCursor.background": "{{ ui.background }}",
    "editorCursor.foreground": "{{ ui.secondaryAccentAlt }}",
    "editor.selectionBackground": "{{ ui.accent }}{{ alpha.highMed }}",
    "editor.selectionHighlightBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "editor.wordHighlightBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "editor.wordHighlightStrongBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "editor.findMatchBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "editor.findMatchHighlightBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "editor.findRangeHighlightBackground": "{{ ui.accentAlt }}{{ alpha.low }}",
    "editor.hoverHighlightBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "editor.lineHighlightBackground": "{{ ui.accent }}{{ alpha.medLow }}",
    "editor.rangeHighlightBackground": "{{ ui.accent }}{{ alpha.med }}",
    "editorIndentGuide.background": "{{ ui.accent }}{{ alpha.med }}",
    "editorIndentGuide.activeBackground": "{{ ui.accent }}",
    "editorRuler.foreground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "editorCodeLens.foreground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "editorBracketMatch.background": "{{ ui.accentAlt }}{{ alpha.med }}",
    "editorBracketMatch.border": "{{ ui.accentAlt }}{{ alpha.none }}",
    "editorOverviewRuler.border": "{{ ui.accent }}{{ alpha.highMed }}",
    "editorOverviewRuler.findMatchForeground": "{{ ui.accentAlt }}",
    "editorOverviewRuler.modifiedForeground": "{{ ui.modified }}{{ alpha.med }}",
    "editorOverviewRuler.addedForeground": "{{ ui.positive }}{{ alpha.med }}",
    "editorOverviewRuler.deletedForeground": "{{ ui.negative }}{{ alpha.med }}",
    "editorOverviewRuler.errorForeground": "{{ ui.negative }}{{ alpha.high }}",
    "editorOverviewRuler.warningForeground": "{{ ui.warning }}{{ alpha.med }}",
    "editorOverviewRuler.bracketMatchForeground": "{{ ui.lightText }}{{ alpha.med }}",
    "editorError.foreground": "{{ ui.negative }}",
    "editorWarning.foreground": "{{ ui.warning }}{{ alpha.highMed }}",
    "editorGutter.modifiedBackground": "{{ ui.modified }}{{ alpha.highMed }}",
    "editorGutter.addedBackground": "{{ ui.positive }}{{ alpha.highMed }}",
    "editorGutter.deletedBackground": "{{ ui.negative }}{{ alpha.highMed }}",
    "diffEditor.insertedTextBackground": "{{ ui.positive }}{{ alpha.low }}",
    "diffEditor.removedTextBackground": "{{ ui.negative }}{{ alpha.low }}",
    "editorWidget.background": "{{ ui.backgroundAlt }}",
    "editorWidget.border": "{{ ui.backgroundAlt }}",
    "editorSuggestWidget.highlightForeground": "{{ ui.secondaryAccentAlt }}",
    "peekView.border": "{{ ui.border }}",
    "peekViewEditor.background": "{{ ui.backgroundAlt }}",
    "peekViewEditor.matchHighlightBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "peekViewResult.background": "{{ ui.backgroundAlt }}",
    "peekViewResult.matchHighlightBackground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "peekViewResult.selectionBackground": "{{ ui.accent }}{{ alpha.med }}",
    "peekViewTitle.background": "{{ ui.backgroundAlt }}",
    "panelTitle.activeBorder": "{{ ui.secondaryAccentAlt }}",
    "statusBar.background": "{{ ui.background }}",
    "statusBar.foreground": "{{ ui.lightText }}{{ alpha.med }}",
    "statusBar.debuggingBackground": "{{ ui.tertiaryAccent }}",
    "statusBar.debuggingForeground": "{{ ui.darkText }}",
    "statusBar.noFolderBackground": "{{ ui.background }}",
    "statusBarItem.hoverBackground": "{{ ui.accent }}",
    "statusBarItem.prominentBackground": "{{ ui.accent }}",
    "statusBarItem.prominentHoverBackground": "{{ ui.accentAlt }}",
    "titleBar.activeBackground": "{{ ui.background }}",
    "titleBar.inactiveBackground": "{{ ui.background }}",
    "extensionButton.prominentBackground": "{{ ui.secondaryAccentAlt }}",
    "extensionButton.prominentHoverBackground": "{{ ui.secondaryAccent }}",
    "pickerGroup.foreground": "{{ ui.secondaryAccentAlt }}{{ alpha.high }}",
    "terminal.foreground": "{{ ui.lightText }}",
    "terminal.ansiBlue": "{{ ansi.normal.blue }}",
    "terminal.ansiBrightBlue": "{{ ansi.bright.blue }}",
    "terminal.ansiBrightCyan": "{{ ansi.bright.cyan }}",
    "terminal.ansiBrightGreen": "{{ ansi.bright.green }}",
    "terminal.ansiBrightMagenta": "{{ ansi.bright.magenta }}",
    "terminal.ansiBrightRed": "{{ ansi.bright.red }}",
    "terminal.ansiBrightYellow": "{{ ansi.bright.yellow }}",
    "terminal.ansiCyan": "{{ ansi.normal.cyan }}",
    "terminal.ansiGreen": "{{ ansi.normal.green }}",
    "terminal.ansiMagenta": "{{ ansi.normal.magenta }}",
    "terminal.ansiRed": "{{ ansi.normal.red }}",
    "terminal.ansiYellow": "{{ ansi.normal.yellow }}",
    "terminal.selectionBackground": "{{ ui.accentAlt }}{{ alpha.medLow }}",
    "terminalCursor.background": "{{ ui.lightText }}",
    "terminalCursor.foreground": "{{ ui.accentAlt }}{{ alpha.med }}",
    "debugToolBar.background": "{{ ui.background }}",
    "walkThrough.embeddedEditorBackground": "{{ ui.backgroundAlt }}",
    "gitDecoration.addedResourceForeground": "{{ ui.warning }}{{ alpha.highMed }}",
    "gitDecoration.modifiedResourceForeground": "{{ ui.tertiaryAccent }}",
    "gitDecoration.deletedResourceForeground": "{{ ui.negative }}",
    "gitDecoration.untrackedResourceForeground": "{{ ui.warning }}",
    "gitDecoration.ignoredResourceForeground": "{{ ui.lightText }}{{ alpha.medLow }}",
    "breadcrumbPicker.background": "{{ ui.backgroundAlt }}"
  },
  "tokenColors": [
    {
      "name": "Comments",
      "scope": "comment",
      "settings": {
        "foreground": "{{ syntax.gray }}{{ alpha.medLow }}",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Constants",
      "scope": "constant",
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}"
      }
    },
    {
      "name": "Escape characters",
      "scope": "constant.character.escape",
      "settings": {
        "foreground": "{{ syntax.turquoise }}{{ alpha.high }}"
      }
    },
    {
      "name": "Named entities",
      "scope": "entity.name",
      "settings": {
        "foreground": "{{ syntax.tacao }}{{ alpha.high }}"
      }
    },
    {
      "name": "Function names",
      "scope": "entity.name.function",
      "settings": {
        "foreground": "{{ syntax.turquoise }}{{ alpha.high }}"
      }
    },
    {
      "name": "Tags",
      "scope": "entity.name.tag",
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.high }}",
        "fontStyle": "{{ tagStyle }}"
      }
    },
    {
      "name": "Static types",
      "scope": ["entity.name.type", "storage.type.cs"],
      "settings": {
        "foreground": "{{ syntax.tacao }}{{ alpha.high }}"
      }
    },
    {
      "name": "Tag attributes",
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}",
        "fontStyle": "{{ attributeStyle }}"
      }
    },
    {
      "name": "Inherited classes",
      "scope": "entity.other.inherited-class",
      "settings": {
        "foreground": "{{ syntax.rosebud }}{{ alpha.high }}"
      }
    },
    {
      "name": "CSS ID selectors",
      "scope": "entity.other.attribute-name.id",
      "settings": {
        "foreground": "{{ syntax.turquoise }}{{ alpha.high }}"
      }
    },
    {
      "name": "Pseudo CSS",
      "scope": ["entity.other.attribute-name.pseudo-element", "entity.other.attribute-name.pseudo-class"],
      "settings": {
        "foreground": "{{ syntax.rosebud }}{{ alpha.high }}"
      }
    },
    {
      "name": "Variable names",
      "scope": ["entity.name.variable", "variable"],
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.high }}"
      }
    },
    {
      "name": "Keywords",
      "scope": "keyword",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}",
        "fontStyle": "{{ keywordStyle }}"
      }
    },
    {
      "name": "Operators",
      "scope": "keyword.operator",
      "settings": {
        "foreground": "{{ syntax.gray }}"
      }
    },
    {
      "name": "Special operators",
      "scope": [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.logical",
        "keyword.operator.delete"
      ],
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Units",
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}"
      }
    },
    {
      "name": "Markup quotes",
      "scope": "markup.quote",
      "settings": {
        "foreground": "{{ syntax.rosebud }}{{ alpha.highMed }}",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markup headings",
      "scope": ["markup.heading", "entity.name.section"],
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.high }}"
      }
    },
    {
      "name": "Markup bold",
      "scope": "markup.bold",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markup italics",
      "scope": "markup.italic",
      "settings": {
        "foreground": "{{ syntax.turquoise }}{{ alpha.high }}",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markup code",
      "scope": ["markup.inline.raw", "markup.fenced_code.block"],
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}"
      }
    },
    {
      "name": "Markup links",
      "scope": "markup.underline.link",
      "settings": {
        "foreground": "{{ syntax.rosebud }}{{ alpha.high }}"
      }
    },
    {
      "name": "Storage keywords",
      "scope": "storage",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}",
        "fontStyle": "{{ keywordStyle }}"
      }
    },
    {
      "name": "Strings",
      "scope": ["string.quoted", "string.template"],
      "settings": {
        "foreground": "{{ syntax.rosebud }}{{ alpha.high }}"
      }
    },
    {
      "name": "Regex",
      "scope": "string.regexp",
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}"
      }
    },
    {
      "name": "Markup link descriptions",
      "scope": "string.other.link",
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}"
      }
    },
    {
      "name": "Provided (support) values",
      "scope": "support",
      "settings": {
        "foreground": "{{ syntax.tacao }}{{ alpha.high }}"
      }
    },
    {
      "name": "Provided functions",
      "scope": "support.function",
      "settings": {
        "foreground": "{{ syntax.turquoise }}{{ alpha.high }}"
      }
    },
    {
      "name": "Provieded variables",
      "scope": "support.variable",
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.high }}"
      }
    },
    {
      "name": "Object/JSON property names",
      "scope": ["support.type.property-name", "meta.object-literal.key"],
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.high }}"
      }
    },
    {
      "name": "CSS property names",
      "scope": "support.type.property-name.css",
      "settings": {
        "foreground": "{{ syntax.gray }}"
      }
    },
    {
      "name": "Language variables",
      "scope": ["variable.language"],
      "settings": {
        "foreground": "{{ syntax.tacao }}{{ alpha.high }}",
        "fontStyle": "italic"
      }
    },
    {
      "name": "Parameters",
      "scope": "variable.parameter",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Embedded template punctuation",
      "scope": "string.template meta.embedded",
      "settings": {
        "foreground": "{{ syntax.gray }}"
      }
    },
    {
      "name": "Tag brackets",
      "scope": "punctuation.definition.tag",
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.highMed }}",
        "fontStyle": "{{ tagStyle }}"
      }
    },
    {
      "name": "Key/value separators",
      "scope": "punctuation.separator",
      "settings": {
        "foreground": "{{ syntax.gray }}"
      }
    },
    {
      "name": "Template expressions",
      "scope": ["punctuation.definition.template-expression", "punctuation.quasi.element"],
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Embedded section punctuation",
      "scope": "punctuation.section.embedded",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Markup list punctuation",
      "scope": "punctuation.definition.list",
      "settings": {
        "foreground": "{{ syntax.apricot }}{{ alpha.high }}"
      }
    }
  ]
}
