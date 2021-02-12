const express = require('express');
const app = express();

app.listen(4321, () => console.log('listening at 4321'));

/*
 server web pages
 /public/index.html
 */
app.use(express.static('public'));

