const path = require('path');
const express = require('express');

module.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use('/assets/', express.static(path.resolve(__dirname, 'src/assets')));
      return middlewares;
    }
  }
}