const express = require("express");

const routes = express.Router();

const ContactsController = require("./controllers/ContactsController");
const FavoriteController = require("./controllers/FavoriteController");
const ContentController = require("./controllers/ContentController");

//ROTA NORMAL
routes.post("/contacts", ContactsController.create);
routes.get("/contacts", ContactsController.read);
routes.delete("/contacts/:id", ContactsController.delete);

//ROTA FAVORITO
routes.get("/favoritos", FavoriteController.read);
routes.post("/favoritos/:id", FavoriteController.update);

//ROTA CONTENT
routes.post("/contents/:id", ContentController.update);
module.exports = routes;
