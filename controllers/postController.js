const Post = require('../models/postModel');

exports.insertPost=(req,res)=>{
    const post = new Post(req.body);

    post.save()
        .then((post)=>res.status(200).json({msg:"Data Saved Successfully",data:post}))
        .catch((err)=>res.status(400).json({Err:"Error Found "+err}))
}