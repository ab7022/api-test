const express = require("express")
const app = express()
app.use(express.json())



app.post("/signin",function(req,res){
    const body = req.body
    const username = body.username
    const password = body.password
    return res.json({
        username,
        password,
        msg:"this is post request of signin"
    })
})

app.get("/signin",function (req,res) {
    return res.json({
        msg:"this is signin"
    })
})


app.get("/signup",function (req,res) {
    return res.json({
        msg:"this is signup"
    })
})
app.post("/signup",function(req,res){
    const body = req.body
    const username = body.username
    const password = body.password
    return res.json({
        username,
        password,
        msg:"this is post request of signup"

    })
})


app.listen(3000)