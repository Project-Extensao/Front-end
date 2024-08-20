


import { useState, useEffect } from 'react';
import axios from 'axios';
import CampusFilter from './campusFilter';
import useFilteredProjects from './filterProjects';

const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [expandResumoId, setExpandResumoId] = useState(null);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/projetos');
        setProjetos(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  const filteredProjetos = useFilteredProjects(projetos, selectedCampus);

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const toggleResumo = (id) => {
    setExpandResumoId(expandResumoId === id ? null : id);
  };

  return (
    <div>
      {/* Filtro de Campus */}
      <CampusFilter selectedCampus={selectedCampus} handleCampusChange={handleCampusChange} />

    
      <div>
        <h3>Total de resultados encontrados: {filteredProjetos.length}</h3>
      </div>

     
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modalidade</th>
            <th>Unidade de Origem</th>
            <th>Título do Projeto</th>
            <th>Área de Conhecimento</th>
            <th>Área Temática</th>
            <th>Linha Temática</th>
            <th>Coordenador do Projeto</th>
            <th>Email do Coordenador</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Situação</th>
            <th>Última Alteração</th>
            <th>Palavras-chave</th>
            <th>Resumo</th>
            <th>Parcerias</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjetos.map((projeto) => (
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
              <td>
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
              <td>{projeto.parcerias || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProjetos;
