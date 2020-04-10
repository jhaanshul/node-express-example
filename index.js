const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const hostname = 'localhost';
const port = '3000';

const app = express();//our APPLICATION IS GOING TO USE EXPRESS APP MODULE
app.use(morgan('dev'));//use dev type for printing additional info

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next)=>{
 res.statusCode = 200;
 res.setHeader('Content-type','text');
 next();//it will continue to look for additional specifications down below
});

app.get('/dishes',(req, res, next) =>{
  res.end('will send all the dishes to you!');
});

app.post('/dishes',(req, res, next) => {
  res.end('will add the information: '+ req.body.name+ ' with details ' + req.body.description);
})

app.put('/dishes',(req, res, next)=>{
  res.statusCode = 403;	
  res.end('put operation not supported on dishes');
});

app.delete('/dishes',(req, res, next)=>{
  res.end('Deleting all the dishes!!');
});

app.get('/dishes/:dishId',(req, res, next) =>{
  res.end('will send the dish'+req.params.dishId+' to you!');
});


app.put('/dishes/:dishId',(req, res, next)=>{
  res.write('updating the dish '+req.params.dishId);
  res.end('will update the dish '+ req.body.name+' with details '+ req.body.description);
});

app.post('/dishes/:dishId',(req, res, next) => {
  res.statusCode = 403;	
  res.end('Post operation not supported on dish '+req.params.dishId );
});

app.delete('/dishes/:dishId',(req, res, next)=>{
  res.end('Deleting the dish '+ req.params.dishId);
});


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

