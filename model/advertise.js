const mongoose = require('mongoose');

const AdvertiseSchema = new mongoose.Schema({
    postedby : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    googdtype : {
        type: String,
        required: false
    },
    vehicleneed : {
        type: String,
        required: false
    }, 
    from : {
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
    destination : {
        type : String,
        required: true
    },
    fare : {
        type: Number,
        required: true
    },
    negociable : {
        type: String,
        required: true
    },
    status : {
        type: Boolean
    }
},{ timestamp: true });

module.exports = mongoose.model('Advertise', AdvertiseSchema);