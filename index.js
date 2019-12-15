// const express = require("express");
// const mongoose = require("mongoose");

// // const dotenv = require('dotenv').config();
// const app = express();
// app.use(express.json());
// app.use(express.static(__dirname + "/public"));
// mongoose.connect(process.env.URL, 
//     { useNewUrlParser: true, 
//         useUnifiedTopology: true,
//         useFindAndModify: false, 
//         useCreateIndex: true 
//     })
//     .then((db) => {
//         console.log("Successfully connected to MongodB server");
//     }, (err) => console.log(err));


// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.statusCode = 500;
//     res.json({ message: err.message });
// });

// app.listen(process.env.PORT, () => {
//     console.log(`App is running at localhost:${process.env.PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/TOH';
const port = 3000;
const app= express();

app.use(express.json());
mongoose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    }).then((db)=>{
    console.log("Successfully connected to mongoose");
},(err)=>console.log(err));

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.statusCode = 500;
    res.json({message: err.message});
});

app.listen(port, ()=> {
    console.log("Your server is running");
});

