import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaTrash } from "react-icons/fa";
import axios from "axios";
import "../../styles/component/_agenda.sass";

interface Contato {
  _id: string; // Alterado para '_id'
  nome: string;
  numero: string;
  favorito: boolean;
}

const Agenda = () => {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [nome, setNome] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [favorito, setFavorito] = useState<boolean>(false);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const response = await axios.get<Contato[]>(
          "http://localhost:3333/contacts"
        );
        setContatos(response.data);
      } catch (error) {
        console.error("Erro ao carregar os contatos:", error);
      }
    };

    fetchContatos();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = { nome, numero, favorito };

    try {
      const response = await axios.post<Contato>(
        "http://localhost:3333/contacts",
        data
      );
      console.log("Contato salvo:", response.data);
      setNome("");
      setNumero("");
      setFavorito(false);
      setContatos([...contatos, response.data]);
    } catch (error) {
      console.error("Erro ao salvar o contato:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // Enviar requisição DELETE para o backend com o '_id'
      await axios.delete(`http://localhost:3333/contacts/${id}`);
      // Atualiza a lista de contatos removendo o contato deletado
      setContatos(contatos.filter((contato) => contato._id !== id)); // Usando '_id'
      console.log("Contato deletado:", id);
    } catch (error) {
      console.error("Erro ao deletar o contato:", error);
    }
  };

  return (
    <main>
      <section className="agendaContato">
        <form onSubmit={handleSubmit}>
          <h3>Adicionar Contato</h3>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="numero">Número</label>
          <input
            id="numero"
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <label htmlFor="favorito">
            Favorito
            {favorito ? (
              <FaStar onClick={() => setFavorito(false)} />
            ) : (
              <FaRegStar onClick={() => setFavorito(true)} />
            )}
          </label>
          <button type="submit">Salvar Contato</button>
        </form>
      </section>

      <section className="agendaContato salvos">
        <div>
          <h3>Contatos Salvos</h3>
          <ul>
            {contatos.map((contato) => (
              <li key={contato._id}>
                {" "}
                {/* Usando '_id' no lugar de 'id' */}
                <strong>{contato.nome}</strong> - {contato.numero}
                {contato.favorito && <FaStar style={{ color: "gold" }} />}
                <FaTrash
                  onClick={() => handleDelete(contato._id)} // Passando '_id' para a função de deletar
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Agenda;
