const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("loginTW", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados MySQL com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
})();

module.exports = sequelize;
