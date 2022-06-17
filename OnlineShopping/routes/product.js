var express = require('express');
var router = express.Router();

var mongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  var data={
   pro:[]
  }
  mongoClient.connect(dburl,(error,client)=>{
    var pricerange=req.query.Pricerange
    console.log( "the price is" + pricerange)
  if(error){
    console.log(error)
    data.msg="NOT ABLE TO CONNECT WITH DB"
  }else{
    var db=client.db("(Onlineshopping)")
    var collection = db.collection("ProductMetaData");
    collection.find({}).toArray((error,items)=>{
      if(error){
        data.msg="error while connecting"
      }else{

      client.close()
      
      
          var tempiteams=[]

      for(let i=0;i<items.length;i++){
        if(items[i].price >= pricerange){
           tempiteams.push(items[i])
         }
    
     }

      console.log(tempiteams)
       data.pro=tempiteams
      
      res.send(JSON.stringify(data));
      
      }
    })
  }
  })
  
});

module.exports = router;
