/*import { useState, useEffect } from 'react';
import axios from 'axios';
import CampusFilter from './CampusFilter';
import SituacaoFilter from './situacaoProjects';
import AreaConhecimentoFilter from './AreaConhecimentoFilter';
import LinhaTematicaFilter from './linhaTematicaFilter';
import ModalidadeFilter from './ModalidadeFilter'; // Importa o novo filtro
import AnoFilter from './anoFilter';
import useFilteredProjects from './filterProjects';
import ExportCSVButton from './exportCsv';


const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedSituacoes, setSelectedSituacoes] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLinha, setSelectedLinha] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState([]); // Modificado para array
  const [selectedAno, setSelectedAno] = useState('');
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

  // Filtra projetos 
  const filteredProjetos = useFilteredProjects(projetos, selectedCampus, selectedSituacoes, selectedAreas, selectedLinha, selectedModalidade, selectedAno);

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleSituacaoChange = (situacoes) => {
    setSelectedSituacoes(situacoes);
  };

  const handleAreaChange = (areas) => {
    setSelectedAreas(areas);
  };

  const handleLinhaChange = (linha) => {
    setSelectedLinha(linha);
  };

  const handleModalidadeChange = (modalidades) => {
    setSelectedModalidade(modalidades); // Atualiza o estado com o array de modalidades
  };

  const handleAnoChange = (ano) => {
    setSelectedAno(ano);
  };

  const toggleResumo = (id) => {
    setExpandResumoId(expandResumoId === id ? null : id);
  };

  const distinctAreas = [...new Set(projetos.map(projeto => projeto.area_conhecimento))];
  const distinctLinhas = [...new Set(projetos.map(projeto => projeto.linha_tematica))];
  const distinctModalidades = [...new Set(projetos.map(projeto => projeto.modalidade))];
  
  const distinctAnos = [...new Set(projetos.flatMap(projeto => [
    new Date(projeto.dt_inicio_proj).getFullYear().toString(),
    new Date(projeto.dt_fim_proj).getFullYear().toString()
  ]))].sort((a, b) => b - a); // Ordena anos decrescente
  
  return (
    <div>
      <CampusFilter selectedCampus={selectedCampus} handleCampusChange={handleCampusChange} />
      <SituacaoFilter selectedSituacoes={selectedSituacoes} handleSituacaoChange={handleSituacaoChange} />
      <AreaConhecimentoFilter selectedAreas={selectedAreas} handleAreaChange={handleAreaChange} areasDeConhecimento={distinctAreas} />
      <LinhaTematicaFilter selectedLinha={selectedLinha} handleLinhaChange={handleLinhaChange} linhasTematicas={distinctLinhas} />
      <ModalidadeFilter selectedModalidade={selectedModalidade} handleModalidadeChange={handleModalidadeChange} modalidades={distinctModalidades} />
      <AnoFilter selectedAno={selectedAno} handleAnoChange={handleAnoChange} anos={distinctAnos} />

      <div>
        <h3>Total de resultados encontrados: {filteredProjetos.length}</h3>
      </div>
      
      <ExportCSVButton data={filteredProjetos} fileName="projetos.csv" />

  
      <table>
        <thead>
          <tr>
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
*/


import { useState, useEffect } from 'react';
import axios from 'axios';
import CampusFilter from './CampusFilter';
import SituacaoFilter from './situacaoProjects';
import AreaConhecimentoFilter from './AreaConhecimentoFilter';
import LinhaTematicaFilter from './LinhaTematicaFilter';
import ModalidadeFilter from './ModalidadeFilter';
import AnoFilter from './AnoFilter';
import useFilteredProjects from './filterProjects';
import ExportCSVButton from './ExportCsv';

const TabelaProjetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedSituacoes, setSelectedSituacoes] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLinha, setSelectedLinha] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState('');
  const [selectedAno, setSelectedAno] = useState('');
  const [expandResumoId, setExpandResumoId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para o filtro de palavras

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get('http://localhost:3333/projetos');
        setProjetos(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    const fetchModalidades = async () => {
      try {
        const response = await axios.get('http://localhost:3333/modalidades'); // Atualize a URL conforme necessário
        setModalidades(response.data);
      } catch (error) {
        console.error('Erro ao buscar modalidades:', error);
      }
    };

    fetchProjetos();
    fetchModalidades();
  }, []);

  // Filtra projetos 
  const filteredProjetos = useFilteredProjects(
    projetos,
    selectedCampus,
    selectedSituacoes,
    selectedAreas,
    selectedLinha,
    selectedModalidade,
    selectedAno
  );

  // Função para filtrar projetos com base no termo de pesquisa
  const filterBySearchTerm = (projetos) => {
    if (!searchTerm) return projetos;

    const lowercasedTerm = searchTerm.toLowerCase();
    return projetos.filter(projeto => 
      Object.values(projeto).some(value => 
        value && value.toString().toLowerCase().includes(lowercasedTerm)
      )
    );
  };

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleSituacaoChange = (situacoes) => {
    setSelectedSituacoes(situacoes);
  };

  const handleAreaChange = (areas) => {
    setSelectedAreas(areas);
  };

  const handleLinhaChange = (linha) => {
    setSelectedLinha(linha);
  };

  const handleModalidadeChange = (modalidade) => {
    setSelectedModalidade(modalidade);
  };

  const handleAnoChange = (ano) => {
    setSelectedAno(ano);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleResumo = (id) => {
    setExpandResumoId(expandResumoId === id ? null : id);
  };

  const distinctAreas = [...new Set(projetos.map(projeto => projeto.area_conhecimento))];
  const distinctLinhas = [...new Set(projetos.map(projeto => projeto.linha_tematica))];
  const distinctAnos = [...new Set(projetos.flatMap(projeto => [
    new Date(projeto.dt_inicio_proj).getFullYear().toString(),
    new Date(projeto.dt_fim_proj).getFullYear().toString()
  ]))].sort((a, b) => b - a); // Ordena anos decrescente

  const filteredAndSearchedProjetos = filterBySearchTerm(filteredProjetos);

  return (
    <div>
      <CampusFilter selectedCampus={selectedCampus} handleCampusChange={handleCampusChange} />
      <SituacaoFilter selectedSituacoes={selectedSituacoes} handleSituacaoChange={handleSituacaoChange} />
      <AreaConhecimentoFilter selectedAreas={selectedAreas} handleAreaChange={handleAreaChange} areasDeConhecimento={distinctAreas} />
      <LinhaTematicaFilter selectedLinha={selectedLinha} handleLinhaChange={handleLinhaChange} linhasTematicas={distinctLinhas} />
      <ModalidadeFilter selectedModalidade={selectedModalidade} handleModalidadeChange={handleModalidadeChange} modalidades={modalidades} />
      <AnoFilter selectedAno={selectedAno} handleAnoChange={handleAnoChange} anos={distinctAnos} />
      
      <div>
        <label htmlFor="search">Pesquisar:</label>
        <input 
          id="search" 
          type="text" 
          value={searchTerm} 
          onChange={handleSearchChange} 
          placeholder="Digite palavras para pesquisar" 
        />
      </div>

      <div>
        <h3>Total de resultados encontrados: {filteredAndSearchedProjetos.length}</h3>
      </div>
      
      <ExportCSVButton data={filteredAndSearchedProjetos} fileName="projetos.csv" />

      {/* Tabela de projetos */}
      <table>
        <thead>
          <tr>
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
          {filteredAndSearchedProjetos.map(projeto => (
            <tr key={projeto.id_projeto}>
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
