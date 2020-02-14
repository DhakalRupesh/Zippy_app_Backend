const mongoose = require('mongoose');

const AdvertiseSchema = new mongoose.Schema({
    postedby : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    acceptedby : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // pstedbyName : {
    //     type: String
    // },
    // pbyImage: {
    //     type: String
    // },
    // contactno: {
    //     type: String
    // },
    // contactemail: {
    //     type: String
    // },
    goodstype : {
        type: String,
    },
    vehicleneed : {
        type: String,
    }, 
    sendfrom : {
        type: String
    },
    destinationofdelivery : {
        type : String,
    },
    priceofdelivery : {
        type: String,
    },
    negociable : {
        type: String
    },
    ad_image : {
        type: String
    },   
    statusofdelivery : {
        type: Boolean,
        default: false
    }
},{ timestamp: true });

module.exports = mongoose.model('Advertise', AdvertiseSchema);