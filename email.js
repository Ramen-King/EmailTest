const nodemailer = require('nodemailer') 
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodetest662019',
        pass: 'Nismo180'
    }
})

let mailOptions = {
    from: 'nodetest662019@gmail.com',
    to: 'nodetest662019@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy'
}
transporter.sendMail(mailOptions, function(error, info){
    if (error) console.log(error)
    else console.log(`Email sent: ${info.response}`)
})
/** 
 *1. create an event 'createFile' which will create file '{yourName}.txt' with current date and time inside
* 2. create an event 'readFile'wich in 10 sec will read '{yourName}.txt' and print out content to console
* 3. create an event 'updateFile' wich in 10 sec will update '{yourName}.txt' with string 'updated' and print out content to console
* 4. create an event 'deleteFile' wich in 10 sec will delete '{yourName}.txt' and send email with text 'File {fileName} DELETED!'
*/