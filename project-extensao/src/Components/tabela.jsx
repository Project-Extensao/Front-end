import  { useEffect, useState } from 'react';
import axios from 'axios';

const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [filteredProjetos, setFilteredProjetos] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState(''); 
  const [expandResumoId, setExpandResumoId] = useState(null); // Estado para controlar a expansão do resumo

  const campuses = [
    "CAMPUS SANTANA DO LIVRAMENTO",
    "CAMPUS SAO BORJA",
    "CAMPUS JAGUARAO",
    "CAMPUS BAGE",
    "REITORIA",
    "CAMPUS ALEGRETE",
    "CAMPUS URUGUAIANA",
    "CAMPUS SAO GABRIEL",
    "CAMPUS DOM PEDRITO",
    "CAMPUS CACAPAVA DO SUL",
    "CAMPUS ITAQUI"
  ];

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/projetos');
        setProjetos(response.data);
        setFilteredProjetos(response.data); // Inicialmente, mostra todos os projetos
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  // Função para filtrar os projetos com base no campus selecionado
  useEffect(() => {
    if (selectedCampus === '') {
      setFilteredProjetos(projetos);
    } else {
      setFilteredProjetos(projetos.filter(projeto => projeto.unidade_origem === selectedCampus));
    }
  }, [selectedCampus, projetos]);

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const toggleResumo = (id) => {
    setExpandResumoId(expandResumoId === id ? null : id);
  };

  // Total de projetos filtrados
  const totalProjetos = filteredProjetos.length;

  return (
    <div>
      {/* Filtro de campus */}
      <div>
        <label htmlFor="campus-filter">Filtrar por Campus:</label>
        <select id="campus-filter" value={selectedCampus} onChange={handleCampusChange}>
          <option value="">Todos</option>
          {campuses.map(campus => (
            <option key={campus} value={campus}>
              {campus}
            </option>
          ))}
        </select>
      </div>

      {/* Total de resultados */}
      <div>
        <h3>Total de resultados encontradados: {totalProjetos}</h3>
      </div>

      {/* Tabela de projetos */}
      <table>
        <thead>
          <tr>
            <th>ID Projeto</th>
            <th>Modalidade</th>
            <th>Unidade Origem</th>
            <th>Título Projeto</th>
            <th>Área de Conhecimento</th>
            <th>Área Temática</th>
            <th>Linha Temática</th>
            <th>Coord. Projeto</th>
            <th>Email Coord.</th>
            <th>Data Início</th>
            <th>Data Fim</th>
            <th>Situação</th>
            <th>Última Alteração</th>
            <th>Palavras-chave</th>
            <th>Parcerias</th>
            <th>Resumo</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjetos.map(projeto => (
            <tr key={projeto.id_projeto}>
              <td>{projeto.id_projeto}</td>
              <td>{projeto.modalidade}</td>
              <td>{projeto.unidade_origem}</td>
              <td>{projeto.titulo_projeto}</td>
              <td>{projeto.area_conhecimento}</td>
              <td>{projeto.area_tematica}</td>
              <td>{projeto.linha_tematica}</td>
              <td>{projeto.coord_projeto}</td>
              <td>{projeto.email_coord_projeto}</td>
              <td>{new Date(projeto.dt_inicio_proj).toLocaleDateString()}</td>
              <td>{new Date(projeto.dt_fim_proj).toLocaleDateString()}</td>
              <td>{projeto.situacao}</td>
              <td>{new Date(projeto.ult_alter_proj).toLocaleDateString()}</td>
              <td>{projeto.palavras_chave}</td>
              <td>{projeto.parcerias}</td>
              <td>
                {/* Implementar o dropdown para o resumo */}
                <div>
                  {expandResumoId === projeto.id_projeto ? (
                    <p>{projeto.resumo}</p>
                  ) : (
                    <p>{projeto.resumo.substring(0, 100)}...</p>
                  )}
                  <button onClick={() => toggleResumo(projeto.id_projeto)}>
                    {expandResumoId === projeto.id_projeto ? 'Minimizar' : 'Expandir'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProjetos;
