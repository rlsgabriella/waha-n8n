const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/trigger", (req, res) => {
  res.send("Trigger do WAHA recebido!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
