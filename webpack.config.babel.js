import path from 'path';

// Check if we're in production mode
let ext;
if (process.argv.indexOf('-p') !== -1) {
  ext = '.min.js';
} else {
  ext = '.js';
}

const config = {
  entry: path.join(__dirname, 'src', 'jq-bgslider.js'),
  output: {
    filename: `jq-bgslider${ext}`,
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
