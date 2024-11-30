const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

app.get("/:method", (req, res) => {
    res.send(req.path + "/" + req.method);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error!");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, (err) => {
    if (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
    console.log(`listening on port ${PORT}`);
});