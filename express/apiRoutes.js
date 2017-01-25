var express = require('express');
var router = express.Router();
var fs = require('fs');
var carehomes = JSON.parse(fs.readFileSync("./resources/carehomes.json"));
var markers = JSON.parse(fs.readFileSync("./resources/markers.json"));
var news = JSON.parse(fs.readFileSync("./resources/news.json"));
var popupData = JSON.parse(fs.readFileSync("./resources/popupData.json"));

router.get('/carehomes', function(req, res, next) {
   return res.json(carehomes);
});

router.get('/markers', function(req, res, next) {
   return res.json(markers);
});

router.get('/news', function(req, res, next) {
   return res.json(news);
});

router.get('/popup/:id', function(req, res, next) {
   return res.json(popupData[req.params.id]);
});

module.exports = router;