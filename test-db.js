const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/computer_maintenance')
    .then(() => {
        console.log('✅ เชื่อมต่อ MongoDB สำเร็จ');
        process.exit(0);
    })
    .catch(err => {
        console.error('❌ เชื่อมต่อ MongoDB ไม่สำเร็จ:', err);
        process.exit(1);
    });
