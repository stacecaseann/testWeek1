const express = require('express');
const app = express();

app.get('/', (req, res) => 
{
    res.send('Hello test');
});
 const port = 3000;
app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));
