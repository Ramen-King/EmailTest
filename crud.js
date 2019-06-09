const fs = require("fs");
const path = require("path");
const email = require("./_nodemailer");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const crud = {};

crud.baseDir = path.join(__dirname, "./database");

crud.create = (file, data) => {
  fs.open(`${crud.baseDir}/${file}.txt`, "wx", function(error, identifier) {
    if (!error && identifier) {
      fs.writeFile(identifier, data, err => {
        if (!err) {
          fs.close(identifier, err => {
            if (err) {
              console.log(err);
            } else {
              email.sendNotification(
                `${file}.txt has been created on ${new Date()}`
              );
              console.log(
                `Create Success: ${file}.txt has been created on ${new Date()}`
              );
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
      console.log(`File Contains: ${data}`);
    }
  });
};

crud.update = (file, data) => {
  readFile(`${crud.baseDir}/${file}.txt`, "utf8")
    .then(() => {
      return data;
    })
    .then(finalData => {
      fs.truncate(`${crud.baseDir}/${file}.txt`, error => {
        if (!error) {
          fs.writeFile(`${crud.baseDir}/${file}.txt`, finalData, err => {
            if (err) {
              return err;
            }
            email.sendNotification(
              `${file}.txt has been updated on ${new Date()} `
            );
            console.log(`Update Sucess: ${file}.txt has been updated. `);
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
      email.sendNotification(
        `${file}.txt are not the droids you are looking for`
      );
      console.log(
        `Delete Sucess:  ${file}.txt has been obliterated on ${new Date()}`
      );
    } else {
      return err;
    }
  });
};

module.exports.read = crud.read;
module.exports.create = crud.create;
module.exports.update = crud.update;
module.exports.delete = crud.delete;
