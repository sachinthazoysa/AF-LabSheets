//question 01 - Hello world.

//print hello world
console.log('Hello world');

//print an error message in log
console.error(new Error('Something went wrong'));


//question 02 - Use OS system library

const os = require('os');

console.log("architecture: " + os.arch());

for (const cpu of os.cpus()) {
    console.log(cpu);
}
console.log("uptime :" + os.uptime());

console.log("version :" + os.version());

console.log("platform :" + os.platform());


//question 03 - Read a file

//Import the fs system module to read the file.
const fs = require('fs');

//Use the system variable __dirname to set the file location
const fileName = __dirname + '/test.txt';

//Read the file using readFile asynchronous method and print the content of the file to console
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    //this worked without .toString() as well
    console.log("data from text file-async: " + data.toString());
});

//use the readFileSynce method to read the file synchronously

const data = fs.readFileSync(fileName);
console.log("data from text file-sync :" + data.toString());


//question 04 - Use streams to copy content of a file

//Add two variables containing path to the source and destination files.
const newFileName = __dirname + '/test.txt';
const newOutFileName = __dirname + '/testcopy.txt';

//Create read stream and write stream from the source file and destination file respectively.
const readStream = fs.createReadStream(newFileName);
const writeStream = fs.createWriteStream(newOutFileName);

readStream.addListener('end',()=>{
    console.log("End of file read");
});

writeStream.addListener('close',()=>{
    console.log("End of file write");
});


//Pipe the read stream to write stream.
readStream.pipe(writeStream);

//Optionally listen to the data event of the read stream and print the output
readStream.on('data', data => {
    console.log("readstream data: " + data.toString());
});


//question 05 - Http Server

//import the http module from core libraries
const http = require('http');

//create a httpServer that listens to port 3000 and return HTML with Hello World text in h header upon get request

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text.html');
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(3000);


//Optionally add a POST request that accepts from filed name and return HTML with Hello {name}

const httpNew = require('http');
httpNew.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello world</h1>');
            res.end();
            break;
        case 'POST' :
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            })
            break;
    }
}).listen(3001, (err)=> {
    if(err){
        console.log(err);
        return;
    }
    console.log('server is listening to port 3001')
});



