const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    VehicleAddedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    brandName: {
        type: String
    },
    vehicleType: {
        type: String
    },
    vehicle_no: {
        type: String
    },
    license_no: { 
        type: String
    }, 
    license_Image :{
        type: String
    }, 
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);