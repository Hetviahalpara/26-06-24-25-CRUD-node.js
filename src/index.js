const express = require("express");
const Dbconnection = require("./Dbconnection/Dbconnection");

const router=require('./Routes/v1')

const app = express();

const PORT = 1111;

app.listen(PORT, () => {
  console.log("server is startingggg");
});

app.use(express.json())

app.use('/v1',router)

Dbconnection()