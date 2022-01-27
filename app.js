const express = require('express');
const app = express();
const port = 3003;

const server = app.listen(port, () => console.log("Server Listening on port " + port))