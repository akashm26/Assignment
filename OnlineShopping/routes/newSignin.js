var express = require('express');
var router = express.Router();

var mongoClient=require("mongodb").MongoClient;
var dburl= "mongodb://localhost:27017"

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'akash';
const someOtherPlaintextPassword = 'not_bacon';



/* GET home page. */
router.post('/', function(req, res, next) {
  var data={}
  console.log(req.body)
  res.send(JSON.stringify(data))

  mongoClient.connect(dburl,(error,client)=>{
    if(req.body != ''){
      document.querySelector("#regist").style.display='none'
    }else{
      document.querySelector("#regist").style.display='block'
    }
    if(error){
      data.msg="failed to connect to server"
    }else{
      var db= client.db("(Onlineshopping)")
      var collection=db.collection("userAccount")
      bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        req.body.password=hash
        collection.insertOne(req.body,(error)=>{
          if(error){
            data.msg="failed to inster"
          }else{
            data.msg="inserted succesfuly"
          }
          client.close()
        })
        
      }); 
    }
  })
  
});

module.exports = router;
