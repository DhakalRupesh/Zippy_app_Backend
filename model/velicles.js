const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    VehicleAddedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    brandName: {
        type: String,
        required: true,
    },
    vehicleType: {

    },
    vehicle_no: {
        type: String,
        required: true
    },
    license_no: { 
        type: String,
        required: true
    }, 
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);