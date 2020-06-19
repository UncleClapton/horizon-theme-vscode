const path = require('path');
const fs = require('fs');
const mustache = require('mustache');

const srcDir = __dirname
const outDir = path.resolve(srcDir, '..', 'dist')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

const themes = {
  dark: ['horizon', 'horizon-italic', 'horizon-bold'],
  clapton: ['horizon-clapton'],
  bright: ['horizon-bright', 'horizon-bright-italic', 'horizon-bright-bold'],
};

Object.entries(themes).forEach(([dirName, themeNames]) => {
  const themeDir = path.resolve(srcDir, dirName)

  const globals = require(
    path.resolve(themeDir, 'globals')
  );

  const template = JSON.stringify(
    require(
      path.resolve(themeDir, 'template')
    )
  );

  themeNames.forEach((themeName) => {
    const content = require(
      path.resolve(themeDir, `${themeName}.json`)
    );

    const theme = mustache.render(template, { ...content, ...globals });

    fs.writeFileSync(
      path.resolve(outDir, `${themeName}.json`),
      theme
    );
  })
})
