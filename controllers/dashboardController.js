const Repair = require('../models/Repair');
const moment = require('moment');

exports.showDashboard = async (req, res) => {
    const year = new Date().getFullYear();
    const monthlyStats = [];

    for (let month = 0; month < 12; month++) {
        const start = moment().year(year).month(month).startOf('month');
        const end = moment().year(year).month(month).endOf('month');
        const count = await Repair.countDocuments({
            receivedDate: { $gte: start.toDate(), $lte: end.toDate() }
        });
        monthlyStats.push({ month: start.format('MMMM'), count });
    }

    res.render('dashboard/index', { monthlyStats, selectedYear: year });
};

exports.filterDashboard = async (req, res) => {
    const { year } = req.body;
    const monthlyStats = [];

    for (let month = 0; month < 12; month++) {
        const start = moment().year(year).month(month).startOf('month');
        const end = moment().year(year).month(month).endOf('month');
        const count = await Repair.countDocuments({
            receivedDate: { $gte: start.toDate(), $lte: end.toDate() }
        });
        monthlyStats.push({ month: start.format('MMMM'), count });
    }

    res.render('dashboard/index', { monthlyStats, selectedYear: year });
};
