require("dotenv").config();

const mongoose=require("mongoose");

const express = require('express');

const app = express();

const bodyParser=require("body-parser");

const cors = require('cors');

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log('error is '+err));

//Middlewares
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>res.send(process.env.Grting));

app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`));