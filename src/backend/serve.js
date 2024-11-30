const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const User = require("./models/User");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use("/api/auth", require("./routes/auth"));

(async () => {
  try {
    await sequelize.sync();
    console.log("Banco de dados sincronizado!");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();
