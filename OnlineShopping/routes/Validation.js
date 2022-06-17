var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var dburl = 'mongodb://localhost:27017';

router.get('/', (req, res)=> {
 req.session.isValidUser=false
  console.log(req.query);
  var data={}

  mongoClient.connect(dburl,(error,client)=>{
   if(error){
     data.msg="Error while connecting"
   }else{
     var db=client.db("(Onlineshopping)")
     var collection = db.collection("userAccount");
     collection.find({email:req.query.email,}).toArray((error,details)=>{
      console.log(details)
      bcrypt.compare(req.query.pass, details[0].password, function(err, result) {
       
        if(result == true){
          req.session.isValidUser=true
          console.log(req.session.isValidUser)
          data.status='valid'
        }else{
          data.status='Invalid' 
          req.session.isValidUser=false
          
        }
        res.send(JSON.stringify(data));
        client.close();
    });
    

     })
     
   }
  })



});

module.exports = router;
