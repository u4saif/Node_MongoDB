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
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("API with Node and Express");
});

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
})
