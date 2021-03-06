// start server with 
// nodemon -e js,css,html main.js
// to watch for files changes


var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var baseDirectory = __dirname;   //   /home/markche/Desktop/AngularJsRouterPractice
console.log( "baseDirectory " + baseDirectory );
var port = 1337;


http.createServer(function (request, response) {

   try {

     var requestUrl = url.parse(request.url);
     console.log("requestUrl ");
     console.log(requestUrl);

     // need to use path.normalize so people can't access directories underneath baseDirectory
     var fsPath = baseDirectory + path.normalize( requestUrl.pathname );
     console.log("normalized fsPath " + fsPath);

     if( fsPath === '/home/markche/Desktop/AngularJsRouterPractice/') {

          fsPath += 'index.html'  

     }


     response.writeHead(200);
     var fileStream = fs.createReadStream(fsPath);
     fileStream.pipe(response);
     fileStream.on('error',function(e) {
         response.writeHead(404);     // assume the file doesn't exist
         response.end();
     });
   } 
   
   catch(e) {

     response.writeHead(500);
     response.end();     // end the response so browsers don't hang
     console.log(e.stack);

   }

}).listen(port);

console.log(" listening on port " + port );

