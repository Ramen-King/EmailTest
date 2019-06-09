const fs = require("fs");
const path = require("path");
const email = require("./email")
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const crud = {};


crud.baseDir = path.join(__dirname, "./database");

crud.create = (file, data) => {
  fs.open(`${crud.baseDir}/${file}.txt`, "wx", function(error, identifier) {
    if (!error && identifier) {
      
      fs.writeFile(identifier, date, err => {
        if (!err) {
          fs.close(identifier, err => {
            if (err) {
              console.log(err);
            } else {
              email.sendNotification(`${file} has been created on ${new Date}`);
              console.log(`Success:  ${file} has been created on ${new Date}`);
            }
          });
        } else {
          console.log("err");
        }
      });
    }
  });
};

crud.read = file => {
  fs.readFile(`${crud.baseDir}/${file}.txt`, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      email.sendNotification(`${file} has been read on ${date}`);
      console.log(`Contains: ${data}`);
    }
  });
};

crud.update = (file, data) => {
  readFile(`${crud.baseDir}/${file}.txt`, "utf8").then(newStr => {
    let newData = data
    return newData
  }).then(finalData => {
    fs.truncate(`${crud.baseDir}/${file}.txt`, error => {
      if (!error) {
        fs.writeFile(`${crud.baseDir}/${file}.txt`, finalData, err => {
          if (err) {
            return err;
          }
          email.sendNotification(`${file} has been updated on ${new Date} `);
          console.log(`Sucess: ${file} has been updated on ${new Date} `);
        });
      } else {
        return error;
      }
    });
  });
};

crud.delete = file => {
  fs.unlink(`${crud.baseDir}/${file}.txt`, err => {
    if (!err) {
      email.sendNotification(`${file} has been deleted on ${new Date}`);
      console.log(`Notification Sent:  ${file} has been deleted on ${new Date}`);
    } else {
      return err;
    }
  });
};

module.exports.read = crud.read
module.exports.create = crud.create
module.exports.update = crud.update
module.exports.delete = crud.delete

