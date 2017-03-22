var express = require('express'),
  webpack = require('webpack'),
  path = require('path'),
  config = require('./webpack.config.dev'),
  open = require('open');

var port = 3500,
    app = express(),
    compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { noInfo: true }));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    open(`http://localhost:${port}`);
  }
});
