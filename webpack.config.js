const path = require('path');

module.exports = (_, argv) => {
  const {mode = 'development'} = argv;
  const config = {
    mode,
    entry: {
      app: './src/entry.tsx',
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].[id].js',
      path: path.resolve('../assets/', 'js'),
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          }
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
        '@components': path.resolve(__dirname, 'src/components/')
      },
    }
  };

  if (mode === 'development') {
    config.devtool = 'source-map'
  }

  return config;
};
