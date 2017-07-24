// console.logのログインを決めて出力する
// console.info()
// console.warn()
// console.error()

'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
    const now = new Date();
    console.info('[' + now + '] Requested by ' + req.connection.remoteAddress);
     res.writeHead(200, {
         'Content-Type': 'text/html; charset=utf-8'
     });
    res.write(req.headers['user-agent']);

    switch (req.method) {
        case 'GET':
           const fs = require('fs');
           const fs = fs.creatReadString('./from.html')
           fs.pipe(res);
           res.write('GET ' + req.url);
           break;
        case 'POST':
            res.write('POST ' + req.url);
           req.on('data', (data) => {
                console.info('[' + now + '] Data posted: ' + data);
                        });
           break;
        default:
            break;
    }
res.end();
}).on('error', (e) => {
console.error('[' + new Date() + '] Server Error', e);