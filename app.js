require("dotenv").config();

const mongoose=require("mongoose");

const express = require('express');

const app = express();

const bodyParser=require("body-parser");

const cors = require('cors');

// Routers
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');



// DB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log('error is '+err));

//Middlewares
app.use(bodyParser.json());
app.use(cors());


// API
app.use("/api",authRoute);
app.use("/api",postRoute);

app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`));