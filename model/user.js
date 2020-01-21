const mongoose = require('mongoose');
// require('mongoose-type-email');

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
    // gender: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    utype: {
        type: Boolean,
       
    }
});

module.exports = mongoose.model('User', userSchema)