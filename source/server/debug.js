// Provide custom regenerator runtime and core-js
require('babel-polyfill')

// Javascript required hook
require('babel-register')({
    presets: ['es2015', 'react'],
})

// Image required hook
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'svg', 'css', 'less'],
    publicPath: '/assets/',
})

require('./server.jsx')