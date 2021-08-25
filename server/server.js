require('dotenv').config()
const express = require("express")
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false,limit="50mb"})) 

// View Engine
app.use('views',path.join(__dirname,'views'))
app.use('view engine','ejs')

app.get("/",(req,res)=>{
    res.send(" hello Get ")
})

app.listen(port, ()=>{
    console.log("Server is listening on port : ",port)
})


 