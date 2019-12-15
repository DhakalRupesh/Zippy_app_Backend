const mongoose = require('mongoose');

const vehiclesSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
    },
    vehicle_no: {
        type: String,
        required: true
    },
    license_no: { 
        type: String,
        required: true
    }
});

module.exports = mongoose.model('velicle', vehiclesSchema);