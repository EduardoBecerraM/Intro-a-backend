var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if(filePath == './'){
        filePath = './index.html';
    }
})

var extname = String(path.extname(filePath)).toLowerCase();
var contentType = 'text/html';
var nimeTypes = {
    '.html': 'text/html',
    '.js': 'textjavascript',
    '.css': 'text/css',
    'png': 'image/png',
    '.json': 'application/json'
};