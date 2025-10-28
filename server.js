const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Rota de teste 
app.get("/dashboard", (req, res) => {
  res.send("WAHA rodando e pronto para integração com n8n!");
});

// Rota  n8n 
app.get("/trigger", (req, res) => {
  res.send("Trigger do WAHA recebido!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
