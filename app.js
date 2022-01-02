const express = require("express");
const app = express();
const path = require("path");

const PORT = 8001;

app.use("/assets", express.static(path.resolve(__dirname, "assets")));
app.use("/assets", express.static(path.resolve(__dirname, "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "assets/index.html"));
})

app.listen(8001, () => {
    console.log(`Listening on port ${PORT}`);
})