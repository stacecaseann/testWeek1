const express = require('express');
const app = express();
//last class did this const router = express.Router()

app.use('/', require('./routes'));
 const port = 3000;
app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));
