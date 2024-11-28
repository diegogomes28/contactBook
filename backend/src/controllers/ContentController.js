const Contacts = require("../models/ContactsData");

module.exports = {
  async update(request, response) {
    const { id } = request.params;
    const { numero } = request.body;

    const favorito = await Contacts.findOne({ _id: id });

    if (numero) {
      favorito.numero = numero;

      await favorito.save();
    }

    return response.json(favorito);
  },
};
