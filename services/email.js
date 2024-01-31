const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
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

        await transporter.sendMail(mailOptions);
        // console.log(`Verification email sent to ${recipientEmail}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('An error occurred while sending the email');
    }
};