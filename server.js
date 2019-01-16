const express 		= require('express');
const app 			= express();
const port 			= process.env.PORT || 3000;
const bodyParser 	= require('body-parser');
const controller 	= require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(port);
console.log('Server started on port:', port);