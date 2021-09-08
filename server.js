const express = require("express");
const mongoose = require("mongoose");
const converseRouter = require("./converseRouter.js");
const videoupload = require('./video-upload')


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

mongoose.connect("mongodb+srv://letendralex:caca1417@sandbox.xr9gg.mongodb.net/converse?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(function (req, res, next) {


  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});
app.use(converseRouter);



app.listen(3000, () => {
  console.log("Server is running...");
});