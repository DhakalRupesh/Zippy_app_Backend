const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');

const userRoute = require("./route/user");
const adminUser = require("./route/adminuser")
const rideRoute = require("./route/advertise");
const vehicleRoute = require("./route/vehicle"); 
const uploadRoute = require("./route/upload");

const dotenv = require('dotenv').config();
const auth = require('./auth');
const adminAuth = require('./adminauth');
const cors = require('cors');
// const keys = require ('keys');
const app = express();

app.options('*', cors());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true
    })
.then((db) => {
console.log("Connected to Mongo database server.")
}, (err) => console.log(err));

app.use("/user", userRoute);
app.use("/aduser", adminUser);
app.use("/advertise", rideRoute);
app.use("/vehicle", vehicleRoute);
app.use("/uploads", uploadRoute);

app.use(auth.verifyUser);
app.use(adminAuth.verifyUser);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ message: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});