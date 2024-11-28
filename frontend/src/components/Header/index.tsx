import { Link } from "react-router-dom";
import "../../styles/component/_header.sass";

const Cabecalho = () => {
  return (
    <header>
      <i>
        <Link to="/">
          <img src="./imagens/icon.png" alt="icone" />
        </Link>
      </i>
      <ul className="lista">
        <li className="item">
          <Link to="/">Quem somos</Link>
        </li>
        <li className="item">
          <Link to="/contatos">Contatos</Link>
        </li>
      </ul>
    </header>
  );
};

export default Cabecalho;
