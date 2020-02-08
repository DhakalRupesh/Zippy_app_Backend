const mongoose = require('mongoose');

const DevliverSchema = new mongoose.Schema({
    recivedfrom : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    acceptedby : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    deliveredItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advertise'
    }
},{ timestamp: true })
module.exports = mongoose.model('Advertise', DevliverSchema);
