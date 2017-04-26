module.exports = {
    plugins: [
      require('postcss-short'),
      require('postcss-cssnext')({ browsers: [ 'last 3 versions', '> 5%' ] }),
      require('stylelint'),
      require('postcss-browser-reporter')()
    ]
};