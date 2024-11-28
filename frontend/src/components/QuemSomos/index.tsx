import "../../styles/component/_quemSomos.sass";

const QuemSomos = () => {
  return (
    <main>
      <section className="content">
        <img
          src="./imagens/agenda.png"
          alt="foto de agenda enorme"
          className="fotoAgenda"
        />

        <div className="content-text">
          <div className="titulo">
            <h2>Quem somos nós? </h2>
          </div>
          <div className="texto">
            <p>
              Somos uma plataforma ou ferramenta que organiza e mantém seus
              contatos sempre ao alcance, oferecendo uma maneira prática e
              eficiente de armazenar informações sobre as pessoas que são
              importantes para você, tanto em um contexto pessoal quanto
              profissional. Nossa agenda de contatos é mais do que um simples
              repositório de números de telefone; ela é um espaço dinâmico onde
              você pode registrar dados essenciais. Ao centralizar todas essas
              informações, buscamos facilitar a comunicação e garantir que você
              nunca perca uma oportunidade fazer chamadas.
            </p>
          </div>
        </div>
        <div className="content-text">
          <div className="lista-beneficios">
            <h3>Benefícios de ter uma agenda de contatos</h3>
          </div>
          <div className="beneficios">
            <ol>
              <li>Organização e Acessibilidade</li>
              <li>Conexões Rápidas</li>
              <li>Lembretes Importantes</li>
              <li>Segurança e Privacidade</li>
              <li>Aprimoramento da Rede Profissional</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuemSomos;
