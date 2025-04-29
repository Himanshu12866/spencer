const express = require("express")
const cors = require("cors")
const mongoclient = require("mongodb").MongoClient
const dburl = "mongodb://localhost:27017/"

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get("/getusers" , (req,res) =>{
    mongoclient.connect(dburl).then(clientobj =>{
        const db = clientobj.db("spencer")
        db.collection("allusers").find({}).toArray().then(document =>{
            res.send(document)
            res.end()
        })
    })
})

app.listen(4255)

console.log(`App is runnig http://localhost:4255`)