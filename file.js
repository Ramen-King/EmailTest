const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const nodemailer = require("nodemailer");
const crud = {};
const date = new Date();
crud.baseDir = path.join(__dirname, "./database");

/**
 * CREATE
 */
crud.create = (file, data) => {
  fs.open(`${crud.baseDir}/${file}.txt`, "wx", function(error, identifier) {
    if (!error && identifier) {

      fs.writeFile(identifier, date, err => {
        if (!err) {
          fs.close(identifier, err => {
            if (err) {
              console.log(err);
            } else {
                let createdResponse = `${file} has been created on ${date}`
                sendNotification(createdResponse)
              console.log(`Success:  ${file} has been created on ${date}`);
            }
          });
        } else {
          console.log("err");
        }
      });
    }
  });
};

//crud.create('test')

/**
 * READ
 */
crud.read = file => {
  fs.readFile(`${crud.baseDir}/${file}.txt`, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
};
//crud.read('test')
crud.update = (file, data) => {
  //readFile returns Promise
  readFile(`${crud.baseDir}/${file}.txt`, "utf8").then(finalData => {
    fs.truncate(`${crud.baseDir}/${file}.txt`, error => {
      if (!error) {
        fs.writeFile(`${crud.baseDir}/${file}-updated.txt`, finalData, err => {
          if (err) {
            return err;
          }
          
          sendNotification(`${file} has been updated on ${date} `);
          console.log(`Sucess: ${file} has been updated on ${date} `);
        });
      } else {
        return error;
      }
    });
  });
};
//crud.update('test')
// crud.create('cars-updated', {'name': 'mercedes', 'price': '$400'})
// crud.update('cars-updated', {'name': 'toyota', 'price': '$550'})
//crud.read('cars-updated')
// crud.update('cars', {'name': 'Tesla', 'price': "$20000"})

/**
 * DELETE
 */
crud.delete = file => {
  fs.unlink(`${crud.baseDir}/${file}.txt`, err => {
    if (!err) {
      let deleteResponse = `${file} has been deleted on ${date}`;
      sendNotification(deleteResponse);
      console.log(`Notification Sent:  ${file} has been deleted on ${date}`);
    } else {
      return err;
    }
  });
};



const sendNotification = (value) => {
   
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
  mailOptions.text = `${value}`

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) console.log(error);
    else console.log(`Email sent: ${info.response}`);
  });
};
//crud.delete('test')
//crud.create('test')
//crud.read('test')
//sendNotification('hello')
//crud.update('test', date);
