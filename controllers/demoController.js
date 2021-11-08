const Demo = require('../models/demoModel');

exports.insertData=(req,res)=>{
    const demo = new Demo(req.body);

    demo.save((err,demo)=>{
        if(err){
            return res.status(400).json({err:"Not able to save data"});
        }
        else
        {
            return res.status(200).json({
                msg:"Data added successfully at"
            });
        }
    });
}

exports.readData=(req,res)=>{
    Demo.find((err,data)=>{
        if(err){
            return res.status(400).json({err:"Not able to read data"});
        }
        else
        {
            return res.status(200).json(data);
        }
    });

}