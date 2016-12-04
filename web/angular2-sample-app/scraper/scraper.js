var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  url = 'http://www.bbc.co.uk/news/uk-38183699';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title;
      var json = { title : "" };

      $('.story-body__introduction').filter(function(){
        var data = $(this);
        title = data.children().first().text().trim();
        summary = data.text().trim();

        json.title = title;
        json.summary = summary;
      })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
