var express=require("express");

var router=express.Router();

const {insertData,readData} = require('../controllers/demoController');

router.post("/insert",insertData);
router.get("/read",readData);


module.exports=router;