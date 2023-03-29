var express = require('express');
var computationRouter = express.Router();

/* GET home page. */
computationRouter.get('/', function(req, res, next) {

    const x=req.query.x || Math.floor(Math.random() * 10) + 1;
    const y1 = Math.atan(x);
    const y2 = Math.exp(x);
    const y3 = Math.expm1(x);
    const response = `Math.atan(${x}) is ${y1} <br> Math.exp(${x}) is ${y2} <br> Math.expm1(${x}) is ${y3}`;

  res.send(response);
});

module.exports = computationRouter;
