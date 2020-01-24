const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    rider: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    pickuplocationlat : {
        type: mongoose.Decimal128,
        required: true
    },
    pickuplocationlon : {
        type: mongoose.Decimal128,
        required: true
    },
    // pickupTime : {
    //     type: 
    // },
    destinationlat : {
        type: mongoose.Decimal128,
        required: true
    },
    destinationlon :{
        type: mongoose.Decimal128,
        required: true
    },
    // dropTime : {

    // },
    fare : {
        type: mongoose.Decimal128,
        required: true
    },
    driver : [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
    }]
},{ timestamp: true });

module.exports = mongoose.model('Ride', RideSchema);