// Components/Navbar.jsx

import { Link } from 'react-router-dom'; // Usaremos o react-router-dom para navegação
import 'C:/Users/milena/Documents/Projeto Proec/Front-end/project-extensao/src/NavBar.css'; // Certifique-se de que o CSS está importado

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="logoLink">PROEC</Link>
      
      </div>
      <ul className="list">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/tabela">Tabela</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
