const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    name: String,
    serialNumber: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    location: String,
    status: { type: String, default: 'Active' }
});

module.exports = mongoose.model('Device', DeviceSchema);
