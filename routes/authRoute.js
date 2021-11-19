var express=require("express");

var router=express.Router();

const Auth = require('../models/authModel');
// File Uploading
const multer = require('multer');
const {v4 : uuidv4} = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,'client/public/userImg');
    },
    filename : function(req, file, cb){
        cb(null, "USER-"+uuidv4()+"-"+Date.now()+path.extname(file.originalname));
    },
});

let upload = multer({storage});

// this route will post data to the db

router.route("/create-account").post(upload.single('profilePic'),(req,res)=>{
    const{firstName,lastName,emailId,Password} = req.body;
    const profilePic = req.file.filename;

    const pkg = {
        profilePic,firstName,lastName,emailId,Password
    };

    const obj = new Auth(pkg);

    obj.save()
        .then((user)=>res.status(200).json({msg:"Account created Successfully",data:user}))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
});


router.post("/login",(req,res)=>{
    const {emailId,Password} = req.body;
    Auth.findOne({emailId})
    .then((user)=>{
        if(!user){
            res.status(404).json({err:"User not found"});
        }else{
            if(Password === user.Password){
                const usrInfo = {usrEmailId:user.EmailId};
                res.status(200).json(usrInfo);
            }else{
                res.status(400).json({Err:"Password is incorrect"});
            }
        }
    })
    .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}));
})

module.exports=router;