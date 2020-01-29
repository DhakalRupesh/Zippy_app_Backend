const mongoose = require('mongoose');

const DevliverSchema = new mongoose.Schema({
    recivedfrom : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    deliveredBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{ timestamp: true })
module.exports = mongoose.model('Advertise', DevliverSchema);
