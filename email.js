// const nodemailer = require('nodemailer') 
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'nodetest662019',
//         pass: 'Nismo180'
//     }
// })

// let mailOptions = {
//     from: 'nodetest662019@gmail.com',
//     to: 'nodetest662019@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy'
// }
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) console.log(error)
//     else console.log(`Email sent: ${info.response}`)
// })
const nodemailer = require("nodemailer");

const sendNotification = value => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nodetest662019",
        pass: "Nismo180"
      }
    });
  
    let mailOptions = {
      from: "nodetest662019@gmail.com",
      to: "nodetest662019@gmail.com",
      subject: "Sending Email using Node.js",
      text: ""
    };
    mailOptions.text = `${value}`;
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) console.log(error);
      else console.log(`Email sent: ${info.response}`);
    });
}
module.exports.sendNotification = sendNotification