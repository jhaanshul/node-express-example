const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = '3000';

const app = express();//our APPLICATION IS GOING TO USE EXPRESS APP MODULE
app.use((req, res, next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-type','text-html');
	res.end('<html><body><h1>this is an express server</h1></body></html>');
}); //next is an optional parameter

const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`server listening at ${hostname}:${port}`);
});

