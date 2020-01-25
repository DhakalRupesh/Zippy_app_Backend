const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    rider : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    pickuplocationlat : {
        type: Number,
        required: true
    },
    pickuplocationlon : {
        type: Number,
        required: true
    },
    pickupTime : {
        type: Date,
        required: true
    },
    destinationlat : {
        type: Number,
        required: true
    },
    destinationlon :{
        type: Number,
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