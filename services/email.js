const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const smart_wave_transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSCODE,
    },
    tls: {
        rejectUnauthorized: false
    }
});

const cicon_transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
        user: process.env.CICON_EMAIL_USER,
        pass: process.env.CICON_EMAIL_PASSCODE,
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendEmail = async (recipientEmail, templateData) => {
    try {
        const templatePath = path.join(__dirname, '../views/template.ejs');

        const emailTemplate = await ejs.renderFile(templatePath, templateData);

        const mailOptions = {
            from: `"no reply" ${process.env.EMAIL_USER}`,
            to: recipientEmail,
            subject: 'Incoming Message! 👋',
            html: emailTemplate
        };

        await smart_wave_transporter.sendMail(mailOptions);
        // console.log(`Verification email sent to ${recipientEmail}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('An error occurred while sending the email');
    }
};

exports.sendApplicationEmail = async (recipientEmail, templateData) => {
    try {
        const templatePath = path.join(__dirname, '../views/application_template.ejs');

        const emailTemplate = await ejs.renderFile(templatePath, templateData);

        const mailOptions = {
            from: `"no reply" ${process.env.EMAIL_USER}`,
            to: recipientEmail,
            subject: 'Incoming Message! 👋',
            html: emailTemplate
        };

        await cicon_transporter.sendMail(mailOptions);
        // console.log(`Verification email sent to ${recipientEmail}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('An error occurred while sending the email');
    }
};