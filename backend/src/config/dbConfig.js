const mongoose = require("mongoose");

const meuBanco =
  "mongodb+srv://diego:DiegoGomes@cluster0.melqu.mongodb.net/contacts?retryWrites=true&w=majority";

mongoose
  .connect(meuBanco, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão ao MongoDB Atlas estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB Atlas:", error.message);
  });

const db = mongoose.connection;

db.on("error", (error) => console.error("Erro no banco de dados:", error));
db.once("open", () => {
  console.log("Conexão com o banco de dados aberta!");
});

module.exports = db;
