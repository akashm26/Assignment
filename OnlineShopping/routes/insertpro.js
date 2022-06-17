var express = require('express');
var router = express.Router();
var mongoclient = require("mongodb").MongoClient
var dburl = "mongodb://localhost:27017"

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  mongoclient.connect(dburl,(error,client)=>{
    if(error){
      data.msg="you got error"
    }else{
      var db=client.db("(Onlineshopping)")
      var collection=db.collection("ProductMetaData")
      collection.insertOne(req.query,(error)=>{
        if(error){
          data.msg="you got error"
        }
      })
    }

  })
  res.send(JSON.stringify({msg:"success"}))
});

module.exports = router;
