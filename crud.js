const fs = require("fs");
const path = require("path");
const email = require("./email")
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const crud = {};
const date = new Date();

crud.baseDir = path.join(__dirname, "./database");

crud.create = (file, data) => {
  fs.open(`${crud.baseDir}/${file}.txt`, "wx", function(error, identifier) {
    if (!error && identifier) {
      let stringData = date
      fs.writeFile(identifier, stringData, err => {
        if (!err) {
          fs.close(identifier, err => {
            if (err) {
              console.log(err);
            } else {
              email.sendNotification(`${file} has been created on ${date}`);
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

crud.read = file => {
  fs.readFile(`${crud.baseDir}/${file}.txt`, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`Contains: ${data}`);
    }
  });
};

crud.update = (file, data) => {
  readFile(`${crud.baseDir}/${file}.txt`, "utf8").then(finalData => {
    fs.truncate(`${crud.baseDir}/${file}.txt`, error => {
      if (!error) {
        fs.writeFile(`${crud.baseDir}/${file}-updated.txt`, finalData, err => {
          if (err) {
            return err;
          }
          email.sendNotification(`${file} has been updated on ${date} `);
          console.log(`Sucess: ${file} has been updated on ${date} `);
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
      email.sendNotification(`${file} has been deleted on ${date}`);
      console.log(`Notification Sent:  ${file} has been deleted on ${date}`);
    } else {
      return err;
    }
  });
};
module.exports.date = date
module.exports.read = crud.read
module.exports.create = crud.create
module.exports.update = crud.update
module.exports.delete = crud.delete

