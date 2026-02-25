const nodemailer = require("nodemailer");
require('dotenv').config()


const mailSender = async (email, title, body) => {
    try{
            const smtpServer = process.env.SMTP_HOST;
            const smtpPort = Number(process.env.SMTP_PORT);
            const senderEmail = process.env.MAIL_USER;
            const senderPassword = process.env.MAIL_PASS;

            let transporter = nodemailer.createTransport({
                host: smtpServer,
                port: smtpPort,
                secure: smtpPort === 465,
                auth: {
                    user: senderEmail,
                    pass: senderPassword,
                },
            })


            let info = await transporter.sendMail({
                from: `"ManipalEdu" <${process.env.MAIL_USER}>`,
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
        return error;
    }
}


module.exports = mailSender;