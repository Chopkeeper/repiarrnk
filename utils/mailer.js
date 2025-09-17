const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

exports.sendNotification = async (to, subject, message) => {
    await transporter.sendMail({
        from: '"Maintenance System" <your-email@gmail.com>',
        to,
        subject,
        text: message
    });
};
