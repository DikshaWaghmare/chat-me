var express=require("express");

var router=express.Router();

router.get('/demo',(req,res)=>{
    res.send("I'm from Post Router");
})

module.exports=router;