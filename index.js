const express = require('express');
const app = express();

const morgan = require('morgan');

const getPorts = require('./routes/product')

app.use(morgan("dev"));


app.get("/", (req, res)=>{
    res.send("Heyy I am here!")
})

app.use('/api/product', getPorts)

const port = 5000;

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})