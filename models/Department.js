// models/Department.js
const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: String,
    contactPerson: String,
    phone: String
});

module.exports = mongoose.model('Department', DepartmentSchema);
