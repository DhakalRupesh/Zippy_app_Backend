const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
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
        required: true
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