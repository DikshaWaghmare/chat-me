var express=require("express");

var router=express.Router();

router.get('/test',(req,res)=>{
    res.send("I'm from auth Router");
})

module.exports=router;