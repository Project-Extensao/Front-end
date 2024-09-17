// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Tabela from './Components/tabela';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Painel de informações</h1>} />
          <Route path="/tabela" element={<Tabela />} /> {/* Rota para a Tabela */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
