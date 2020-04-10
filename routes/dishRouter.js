const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req, res, next)=> {
  res.statusCode = 200;
  res.setHeader('Content-type','text-html');
  next();
})
.get((req, res, next)=> {
  res.end('Will send all dishes to you');
})
.put((req, res, next)=>{
  res.statusCode = 403;
  res.end('Put operation not supported');
})
.post((req, res, next)=>{
  res.end('will add the dish '+ req.body.name);
})
.delete((req, res, next) => {
  res.end('Deleting all the dishes');
});

module.exports = dishRouter;
