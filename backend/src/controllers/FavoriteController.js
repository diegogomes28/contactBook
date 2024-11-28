const Contacts = require("../models/ContactsData");

module.exports = {
  async read(request, response) {
    const favorito = request.query;

    const favoritoContato = await Contacts.find(favorito);

    return response.json(favoritoContato);
  },

  async update(request, response) {
    const { id } = request.params;

    const contato = await Contacts.findOne({ _id: id });

    if (contato.favorito) {
      contato.favorito = false;
    } else {
      contato.favorito = true;
    }

    await contato.save();

    return response.json(contato);
  },
};
