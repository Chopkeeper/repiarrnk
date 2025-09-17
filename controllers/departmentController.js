const Department = require('../models/Department');

exports.listDepartments = async (req, res) => {
    const departments = await Department.find();
    res.render('departments/list', { departments });
};

exports.showAddForm = (req, res) => {
    res.render('departments/add');
};

exports.addDepartment = async (req, res) => {
    const { name, contactPerson, phone } = req.body;
    await Department.create({ name, contactPerson, phone });
    res.redirect('/departments');
};
