const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // pickuplocationlat : {
    //     type: Number,
    //     required: true
    // },
    // pickuplocationlon : {
    //     type: Number,
    //     required: true
    // },
    pickupLocation : {
        type : String,
        required: true
    },
    pickupTime : {
        type: Date,
        required: true
    },
    // destinationlat : {
    //     type: Number,
    //     required: true
    // },
    // destinationlon :{
    //     type: Number,
    //     required: true
    // },
    destination : {
        type : String,
        required: true
    },
    dropTime : {
        type: Date,
        required: true
    },
    fare : {
        type: Number,
        required: true
    },
    driver : {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
    }
},{ timestamp: true });

module.exports = mongoose.model('Ride', RideSchema);