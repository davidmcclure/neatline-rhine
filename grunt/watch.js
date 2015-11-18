

module.exports = {

  options: {
    livereload: true
  },

  dist: {
    files: [
      'src/**/*',
      '*.php'
    ],
    tasks: 'compile:min'
  }

};
