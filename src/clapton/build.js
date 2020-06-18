/* eslint-disable global-require, import/no-dynamic-require, import/no-extraneous-dependencies */
const fs = require('fs')
const mustache = require('mustache')

const globals = require(`${__dirname}/globals.js`)
const template = JSON.stringify(require(`${__dirname}/template.js`))
const themeNames = ['horizon-clapton']

themeNames.forEach((themeName) => {
  const content = require(`${__dirname}/${themeName}.json`)
  const theme = mustache.render(template, { ...content, ...globals })
  fs.writeFileSync(`${__dirname}/../../themes/${themeName}.json`, theme)
})
