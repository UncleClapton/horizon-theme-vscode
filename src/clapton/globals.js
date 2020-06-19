const baseGlobals = require('../dark/globals')

module.exports = {
  ...baseGlobals,
  ui: {
    ...baseGlobals.ui,
    "shadow": "#0C0C0F",
    "background": '#101319',
    "backgroundSecondary": '#13171E',
    "backgroundTertiary": '#161B23',
  }
}
