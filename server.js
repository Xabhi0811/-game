const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname)); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/game.html");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
