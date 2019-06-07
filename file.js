const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

const crud = {};

crud.baseDir = path.join(__dirname,'./database');

/**
 * CREATE
 */
crud.create = (file,data) => {
    fs.open(`${crud.baseDir}/${file}.txt`, 'wx', function(error, identifier) {
        if(!error && identifier) {
            let date = new Date()
            
            // let jsonArray = [];
            // jsonArray.push(data);
            // let stringData = JSON.stringify(jsonArray, null, 3);

            fs.writeFile(identifier, date, (err) => {
                if(!err) {
                    fs.close(identifier, (err) => {
                        if(err) {
                            console.log(err);
                        } else {
                            console.log('no errors');
                        }
                    })      
                } else {
                    console.log('err');
                    
                }
            })
        }
    })
}

//crud.create('test')



/**
 * READ
 */
crud.read = (file) => {
    fs.readFile(`${crud.baseDir}/${file}.txt`, 'utf8', (err,data) => {
        if(err) {
            throw err
        } else {
            console.log(data); 
        }
    })
}
//crud.read('test')
crud.update = (file, data) => {
    //readFile returns Promise
    readFile(`${crud.baseDir}/${file}.txt`, "utf8")
        .then(finalData => {
            // replace the content in the file with updated data
            fs.truncate(`${crud.baseDir}/${file}.txt`, (error) => {
                if(!error) {
                    fs.writeFile(`${crud.baseDir}/${file}-updated.txt`, finalData, (err) => {
                        if(err) {
                            return err
                        }
                    })
                } else {
                    return error
                }
            })
        })
}
crud.update('test')
// crud.create('cars-updated', {'name': 'mercedes', 'price': '$400'})
// crud.update('cars-updated', {'name': 'toyota', 'price': '$550'})
//crud.read('cars-updated')
// crud.update('cars', {'name': 'Tesla', 'price': "$20000"})



/**
  * DELETE
  */
crud.delete = (file) => {
    fs.unlink(`${crud.baseDir}/${file}.json`, (err) => {
        if(!err) {
            console.log('deleted');
        } else {
            return err
        }
    })
}

//crud.delete('cars')
