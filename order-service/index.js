const express = require('express')

const app = express();

app.use('/', require('./routes/orderRoute.js'))
app.use('/', (req,res)=>{
    res.json("this is a test route")
})




const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Order service running on port ${PORT}`)
})
