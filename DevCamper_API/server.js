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

//-------------------With Express--------------------

const express = require("express");
const dotEnv = require("dotenv");
const connectDB = require('./config/db');
const errorHandler = require("./middleware/error");
const app = express();

//body Parser
app.use(express.json());

const bootcamp = require("./routes/bootcampRoutes")

//Local Environment Variable

dotEnv.config({ path: './config/config.env' })

const PORT = process.env.port || 5000;

//Connecting to Database
connectDB();

//Mounting the Routes
app.use('/app/v1/bootcamp', bootcamp);
//Using Error handler 
app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
})

//Handel the unhandeled exception 

process.on('unhandledRejection', (err, promiss) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})