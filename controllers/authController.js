const Auth = require('../models/authModel');

exports.login = (req, res) => {
    const { emailId, Password } = req.body;
    Auth.findOne({ emailId })
        .then((user) => {
            if (!user) {
                res.status(404).json({ err: "User not found" });
            } else {
                if (Password === user.Password) {
                    res.status(200).json(user.emailId);
                } else {
                    res.status(400).json({ err: "Password is incorrect" });
                }
            }
        })
        .catch((err) => res.status(400).json({ err: "Error Found i.e. " + err }));
};


exports.readUser = (req,res)=>{
    Auth.findOne({ emailId : req.params.email})
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}

exports.allUser = (req,res)=>{
    Auth.find()
        .then((data)=>res.status(200).json(data))
        .catch((err)=>res.status(400).json({Err:"Error Found i.e. "+err}))
}