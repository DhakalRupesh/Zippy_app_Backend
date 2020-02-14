const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        
    },
    lname: {
        type: String,
        
    },
    mobile: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    userimage : {
        type: String,
    },
    password: {
        type: String,
    },
    vehicleOfUser : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    },
    enabled: {
        type: Boolean,    
    }
});

module.exports = mongoose.model('User', userSchema)