const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
mongoose
  .connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
  app.get('/',(req,res)=>{
    console.log(req)
    res.json('server is here')
  })
  app.listen("5000",()=>{
    console.log("server is running")
  })