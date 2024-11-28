const { response } = require("express");
const Contacts = require("../models/ContactsData");

module.exports = {
  async read(request, response) {
    const contactsList = await Contacts.find();

    return response.json(contactsList);
  },
  async create(request, response) {
    const { nome, numero, favorito } = request.body;

    try {
      const newContact = new Contacts({
        nome,
        numero,
        favorito,
      });

      const savedContact = await newContact.save();
      return response.status(201).json(savedContact);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    const contactsDeleted = await Contacts.findOneAndDelete({ _id: id });

    if (contactsDeleted) {
      return response.json(contactsDeleted);
    }

    return response
      .status(404)
      .json({ error: "Contato não encontrado para deletar" });
  },
};
