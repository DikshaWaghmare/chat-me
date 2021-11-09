var express=require("express");

var router=express.Router();

const {insertPost} = require('../controllers/postController');

router.post("/insert",insertPost);

module.exports=router;