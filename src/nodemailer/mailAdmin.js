const { createTransport } = require ('nodemailer');
const config = require('../config.js');

module.exports = async function main(subject, html){

    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: config.mail.fromAndTo,
            pass:config.mail.password
            
        }
    });
    const mailOptions = {
        from: 'Servidor Node.js',
        to: config.mail.fromAndTo,
        subject: subject,
        html: html,
    };

    transporter.sendMail(mailOptions,(err, info)=>{
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}


