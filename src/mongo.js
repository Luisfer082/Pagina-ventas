const express = require("express") 
const bodyParce = require("body-parse")

const app =  express();
app.use(bodyParce.json());

app.listen(3000,() =>{
    console.log("Running");
})