const mongoose = require('mongoose');

const AdvertiseSchema = new mongoose.Schema({
    postedby : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    goodstype : {
        type: String,
        required: false
    },
    vehicleneed : {
        type: String,
        required: false
    }, 
    sendfrom : {
        type: String,
    },
    // pickuplocationlat : {
    //     type: Number,
    //     required: true
    // },
    // pickuplocationlon : {
    //     type: Number,
    //     required: true
    // },
    // pickupLocation : {
    //     type : String,
    //     required: true
    // },
    // pickupTime : {
    //     type: Date,
    //     required: true
    // },
    // destinationlat : {
    //     type: Number,
    //     required: true
    // },
    // destinationlon :{
    //     type: Number,
    //     required: true
    // },
    destinationofdelivery : {
        type : String,
        required: true
    },
    priceofdelivery : {
        type: Number,
        required: true
    },
    negociable : {
        type: String,
        required: true
    },
    statusofdelivery : {
        type: Boolean,
        default: false
    }
},{ timestamp: true });

module.exports = mongoose.model('Advertise', AdvertiseSchema);