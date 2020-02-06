const mongoose = require('mongoose');

const AdvertiseSchema = new mongoose.Schema({
    postedby : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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
    destinationofdelivery : {
        type : String,
        required: true
    },
    priceofdelivery : {
        type: String,
        required: true
    },
    negociable : {
        type: String,
        required: false
    },
    ad_image : {
        type: String,
        required: false
    },
    statusofdelivery : {
        type: Boolean,
        default: false
    }
},{ timestamp: true });

module.exports = mongoose.model('Advertise', AdvertiseSchema);