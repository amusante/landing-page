const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, 'assets')));
console.log(path.join(__dirname, '/assets'));
const args = process.argv;

// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
var port = 3000;
//if port argument is defined, override default port
if(args !== undefined && args[2] !==undefined){
    port = args[2];   
}

server.listen(port);
console.debug('Server listening on port ' + port);