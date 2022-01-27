const express = require('express');
const app = express();
const port = 3003;

const server = app.listen(port, () => console.log("Server Listening on port " + port));

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
    res.status(200).render("home");
})