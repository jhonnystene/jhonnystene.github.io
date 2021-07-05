/*
 * Simple express.js server for local testing.
 */

const express = require("express");
const server = express();
const port = 8080;

server.use(express.static("./"));

server.listen(port, () => {
    console.log(`Webserver running on port ${port}.`);
});