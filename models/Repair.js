const mongoose = require('mongoose');

const RepairSchema = new mongoose.Schema({
    device: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
    issue: String,
    receivedDate: Date,
    completedDate: Date,
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    notes: String
});

module.exports = mongoose.model('Repair', RepairSchema);
