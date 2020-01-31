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
        required: false
    },
    userimage : {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    // enabled: {
    //     type: String
    // }
    enabled: {
        type: Boolean,    
    }
});

module.exports = mongoose.model('User', userSchema)