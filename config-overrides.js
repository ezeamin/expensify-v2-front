const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: '@mui/material',
    libraryDirectory: '',
    camel2DashComponentName: false,
  })
);
