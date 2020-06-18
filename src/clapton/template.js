const baseTemplate = require('../dark/template.json')

module.exports = {
  ...baseTemplate,
  "colors": {
    ...baseTemplate.colors,
    "focusBorder": "{{ ui.secondaryAccentAlt }}{{ alpha.med }}",
    "input.background": "{{ ui.backgroundAlt }}",
    "activityBar.background": "{{ ui.backgroundTertiary }}",
    "activityBar.activeBackground": "{{ ui.backgroundSecondary }}",
    "activityBar.activeBorder": "{{ ui.secondaryAccentAlt }}{{ alpha.med }}",
    "sideBar.background": "{{ ui.backgroundSecondary }}",
    "sideBarSectionHeader.background": "{{ ui.backgroundSecondary }}",
    "editorGroupHeader.tabsBackground": "{{ ui.backgroundSecondary }}",
    "tab.activeBorder": "{{ ui.secondaryAccentAlt }}{{ alpha.med }}",
    "tab.inactiveBackground": "{{ ui.backgroundSecondary }}",
    "titleBar.activeBackground": "{{ ui.backgroundTertiary }}",
    "titleBar.inactiveBackground": "{{ ui.backgroundTertiary }}",
    "statusBar.background": "{{ ui.backgroundTertiary }}",
    "breadcrumb.background": "{{ ui.backgroundSecondary }}"
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
      "scope": [ "entity.name.function", "variable.function"],
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
      "scope": [ "entity.name.type", "storage.type.cs", "variable.other.class"],
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
        "foreground": "{{ ansi.normal.yellow }}{{ alpha.high }}"
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
        "foreground": "{{ ansi.normal.yellow }}{{ alpha.high }}"
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
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Operators",
      "scope": "keyword.operator",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Special operators",
      "scope": [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.logical",
        "keyword.operator.delete",
        "keyword.operator.comparison",
        "keyword.operator.relational",
        "keyword.operator.typeof"
      ],
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}",
        "fontStyle": "{{ keywordStyle }}"
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
        "foreground": "{{ syntax.gray }}{{ alpha.highMed }}",
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
        "foreground": "{{ ansi.normal.yellow }}{{ alpha.high }}"
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
      "scope": "variable.language",
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
        "foreground": "{{ syntax.gray }}{{ alpha.high }}",
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
      "scope": "punctuation.definition.template-expression",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Section punctuation",
      "scope": ["meta.brace", "punctuation.section.class", "punctuation.section.embedded"],
      "settings": {
        "foreground": "{{ syntax.gray }}{{ alpha.highMed }}"
      }
    },
    {
      "name": "Markup list punctuation",
      "scope": "punctuation.definition.list",
      "settings": {
        "foreground": "{{ syntax.cranberry }}{{ alpha.high }}"
      }
    },

    {
      "name": "String Punctuation",
      "scope": ["punctuation.definition.string", "punctuation.definition.quasi"],
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Storage Arrow function",
      "scope": [
        "storage.type.function"
      ],
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}",
        "fontStyle": ""
      }
    },
    {
      "name": "Decorator Function",
      "scope": [
        "variable.other.readwrite.decorator"
      ],
      "settings": {
        "foreground": "{{ syntax.turquoise }}{{ alpha.high }}"
      }
    },
    {
      "name": "Number",
      "scope": "constant.numeric",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Language constants",
      "scope": "constant.language",
      "settings": {
        "foreground": "{{ syntax.lavender }}{{ alpha.high }}"
      }
    },
    {
      "name": "Control keyword (if, try, while, etc.)",
      "scope": "keyword.control",
      "settings": {
        "fontStyle": "{{ keywordStyle }}"
      }
    }
  ]
}
