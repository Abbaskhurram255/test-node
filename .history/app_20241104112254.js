const express = equires("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log(`listening on port ${process.env.port || 3001}`);
});