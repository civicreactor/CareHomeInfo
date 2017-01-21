var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var staticRoot = __dirname + '/public/';

app.use(express.static(staticRoot));

var routes = require('./apiRoutes.js')
app.use('/api', routes);

app.use(function(req, res, next){
  fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

app.listen(port, function () {
  console.log('App listening on port', port)
});