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