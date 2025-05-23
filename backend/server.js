require("dotenv").config();
const express =require("express");
const cors =require("cors");
const path = require("path");

const app = express();

//middleware to handle cors

app.use  {
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
};

// Middleware
app.use(express.json());