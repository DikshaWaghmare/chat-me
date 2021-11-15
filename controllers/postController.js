const Post = require('../models/postModel');

exports.insertPost=(req,res)=>{
    const postObj = new Post(req.body);

    postObj.save()
        .then((post)=>res.status(200).json({msg:"Data Saved Successfully",data:post}))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}

exports.readPost=(req,res)=>{
    Post.find().sort({createdAt:-1})
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}

exports.readPostById=(req,res)=>{
    Post.findOne({_id:req.params.postId})
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}

exports.deletePost=(req,res)=>{
    Post.findOneAndDelete({_id:req.params.postId})
        .then(()=>res.status(200).json({msg:"Your post deleted successfully"}))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}

exports.updatePost=(req,res)=>{
    Post.findByIdAndUpdate({_id:req.params.postId},req.body)
        .then((post)=>res.status(200).json({msg:"Post updated successfully",updatedFields:req.body}))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}