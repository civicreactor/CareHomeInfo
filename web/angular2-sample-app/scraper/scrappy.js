var scrappy = require('@mrharel/scrappy');

scrappy.get({
    url:"http://finance.yahoo.com/news/facebooks-mark-zuckerberg-says-most-130903427.html"
  }, (response, error)=>{
    if( error ){
      console.log("error: ", error);
    }

    console.log(response);
  });
