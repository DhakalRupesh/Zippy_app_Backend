const express = require("express");
const mongoose =require("mongoose");
const app = express();
app.use(express.json());
app.use (express.static(__dirname + "/public"));
 
mongoose.connect(process.env.URL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,    
    useCreateIndex:true})
    .then((db)=>{
    console.log("successfully connected");
}, (err)=>console.log(err));

app.listen(process.env.PORT, ()=> {
    console.log(`App is running at localhost:${process.env.PORT}`);
});