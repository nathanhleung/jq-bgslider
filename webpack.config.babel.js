import path from 'path';

const config = {
  entry: path.join(__dirname, 'src', 'jq-bgslider.js'),
  output: {
    filename: 'jq-bgslider.js',
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'jqBgslider',
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: ['babel'],
      },
    ],
  },
};

export default config;
