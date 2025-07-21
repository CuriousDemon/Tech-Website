const express = require('express');
const path = require('path');

const rootDir = require('./utils/pathUtils');

const app = express();

const port = 3000;

app.use(express.static(path.join(rootDir,'public')))

app.get('/',(req,res,next) => {
    // res.send("Hello world");
    res.sendFile(path.join(rootDir,'views','index.html'));
})


app.get('/product.html',(req,res,) => {
    // res.send("Hello world");
    res.sendFile(path.join(rootDir,'views','product.html'));
})


app.listen(port,() => {
    console.log(`Address running on http://localhost:${port}`);
})
