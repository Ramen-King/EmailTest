# EmailTest

/**
 * r = open file for reading. An exception occurs if the file does not exist.
 * r+ = open file for reading and writing. An exception occurs if the file does not exist.
 * rs = open file for reading in synchronous mode.
 * rs+ = open file for reading and writing, telling the OS to open it synchronously.
 * w = open for writing. The file is created(if it does not exist) or truncated(if it exists).
 * wx = same as 'w' but fails if path exists.
 * w+ = open file for reading and writing. The file is created(if it does not exist) or truncated(if it exists).
 * wx+ = same as 'w+' but fails if path exists.
 * a = open file for appending. The file is created if it doesnt exist.
 * ax = same as 'a' but fails if path exists.
 * a+ = opens file for reading and appending. The file is created if it doesnt exist.
 * ax+ = same as 'a+' but fails if path exists.
 */

 
1. create an event 'createFile' which will create file '{yourName}.txt' with current date and time inside
2. create an event 'readFile'wich in 10 sec will read '{yourName}.txt' and print out content to console
3. create an event 'updateFile' wich in 10 sec will update '{yourName}.txt' with string 'updated' and print out content to console
4. create an event 'deleteFile' wich in 10 sec will delete '{yourName}.txt' and send email with text 'File {fileName} DELETED!'


Stretch Goal

export into smaller modules

