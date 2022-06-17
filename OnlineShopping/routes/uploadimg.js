var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/Images/Uploads')
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    fileName = file.originalname
    cb(null, fileName)
  }
})

const upload = multer({ storage: storage }).single('ProductImage')
/* GET home page. */
router.post('/',upload,function(req, res, next) {
  data={}
  data.msg="hello all"
 
   
      data.msg='you got error is uploading file'
  
      data.filepath =  req.fileName
      data.msg="upload success"
   
    res.send(JSON.stringify(data))

 
});
  
module.exports = router;
