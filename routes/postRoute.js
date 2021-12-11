var express=require("express");

var router=express.Router();

const Post = require('../models/postModel');

const {insertPost,readPost,readPostById,deletePost,updatePost} = require('../controllers/postController');

// File Uploading
const multer = require('multer');
const {v4 : uuidv4} = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,'client/public/postImg');
    },
    filename : function(req, file, cb){
        cb(null, "POST-"+uuidv4()+"-"+Date.now()+path.extname(file.originalname));
    },
});

let upload = multer({storage});

// this route will post data to the db

router.route("/insert").post(upload.single('postPicture'),(req,res)=>{
    const{postCaption,postLocation,postBelongsTo} = req.body;
    const postPicture = req.file.filename;

    const pkg = {
        postPicture,
        postCaption,
        postLocation,
        postBelongsTo
    };

    const obj = new Post(pkg);

    obj.save()
        .then((post)=>res.status(200).json({msg:"Data Saved Successfully",data:post}))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
});
// this route will get all values from db
router.get("/read",readPost)
// this route will get specefic data from db using id from url prameters
router.get("/read/:postId",readPostById)
// this route will deleted data from a specefic post from db by using postid
router.delete("/delete/:postId",deletePost)
// this route will update a specefic post byusing id & you have to send body too
router.put("/update/:postId",updatePost)

module.exports=router;