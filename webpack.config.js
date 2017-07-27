'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const configuration = require('./configuration');

const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractCssConfig = new ExtractTextPlugin('assets/bundle.css');

const deploymentPath = configuration.path.deployment;
const serverPath = configuration.path.server;

const commonLoaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015']
    }
  },
  {
    test: /\.(less|css)$/,
    use: ExtractTextPlugin.extract({
      use:['css-loader', 'less-loader'],
    }),

    include: path.resolve(__dirname, 'source')
  }
]

const fileLoadersForClient = [
  {
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader?limit=8192&name=/assets/[hash].[ext]'
  },
  {
    test: /\.svg$/,
    loader: 'file-loader?name=/assets/[hash].[ext]'
  }
]

const fileLoadersForServer = fileLoadersForClient.map(i => {
  let iCopy;

  if(!i.loader) return i;
  
  iCopy = JSON.parse(JSON.stringify(i));
  iCopy.test = i.test;
  if(iCopy.loader.split('?').length !== 2) iCopy.loader = iCopy.loader + '?';
  iCopy.loader = iCopy.loader + '&emitFile=false';
  return iCopy
});


const commonResolve = {
  extensions: ['.js', '.jsx', '.json']
}


module.exports = [{
    name: 'browser',

    entry: path.join(configuration.path.client, 'entry.jsx'),
    output: {
      path: deploymentPath,
      filename: 'assets/bundle.js',
    },

    devtool: 'source-map',

    resolve: commonResolve,
    module: {
      rules: commonLoaders.concat(fileLoadersForClient)
    },
    plugins: [
      /*
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
              compress: { warnings: false },
              output: { comments: false },
              mangle: true,
              sourceMap: true,
              beautify: false,
              dead_code: true
            })
          */
      ExtractCssConfig,
    ],
  },

  {
    name: 'server',

    entry: path.join(configuration.path.server, 'server.jsx'),
    output: {
      path: deploymentPath,
      filename: 'server.js',
    },

    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },

    externals: [nodeExternals()],

    resolve: commonResolve,
    module: {
      rules: commonLoaders.concat(fileLoadersForServer)
    },

    plugins: [
      ExtractCssConfig,
    ]
  }
];