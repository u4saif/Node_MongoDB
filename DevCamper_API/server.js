//-------With HTTP module-------------------
// const http = require('http');

// PORT = 5000;
// const server = http.createServer((req, res) => {
//     const { headers, url, method } = req;
//     console.log({ headers, url, method });
//     res.setHeader("Content-Type", "text/html")
//     res.write('<h1>Hello from NodeJs and MongoDB</h1>');
//     res.end();
// })

// server.listen(PORT, () => {
//     console.log(`API Server Started at Port:-${PORT}`);
// })

data = {
    "_id": "5d725a4a7b292f5f8ceff789",
    "title": "Front End Web Development",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": 8,
    "tuition": 8000,
    "minimumSkill": "beginner",
    "scholarhipsAvailable": true,
    "bootcamp": "5d713995b721c3bb38c1f5d0",
    "user": "5d7a514b5d2c12c7449be045"
}
//-------------------With Express--------------------

const express = require("express");
const dotEnv = require("dotenv");
const connectDB = require('./config/db');
const app = express();

//Local Environment Variable

dotEnv.config({ path: './config/config.env' })

const PORT = process.env.port || 5000;

//Connecting to Database
connectDB();

app.get('/', (req, res) => {
    // res.send("API with Node and Express");
    res.status(201).json({
        sucess: true,
        data: data
    })
});

const server = app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
})

//Handel the unhandeled exception 

process.on('unhandledRejection', (err, promiss) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})