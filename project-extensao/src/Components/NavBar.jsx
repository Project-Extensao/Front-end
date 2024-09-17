// Components/Navbar.jsx

import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartPie, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'; 
import 'C:/Users/milena/Documents/Projeto Proec/Front-end/project-extensao/src/NavBar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="logoLink">PROEC</Link>
      </div>
      <ul className="list">
        <li className="item">
          {/* Atualizando o Link para redirecionar para a página de Tabela */}
          <Link to="/tabela">
            <FontAwesomeIcon icon={faChartBar} /> Painel de Informações
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <FontAwesomeIcon icon={faChartPie} /> Gráficos
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <FontAwesomeIcon icon={faQuestionCircle} /> Ajuda
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
