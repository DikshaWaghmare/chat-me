var express=require("express");

var router=express.Router();

const {insertPost,readPost,readPostById,deletePost,updatePost} = require('../controllers/postController');

// this route will post data to the db
router.post("/insert",insertPost);
// this route will get all values from db
router.get("/read",readPost)
// this route will get specefic data from db using id from url prameters
router.get("/read/:postId",readPostById)
// this route will deleted data from a specefic post from db by using postid
router.delete("/delete/:postId",deletePost)
// this route will update a specefic post byusing id & you have to send body too
router.put("/update/:postId",updatePost)

module.exports=router;