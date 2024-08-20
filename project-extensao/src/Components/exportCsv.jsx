
import PropTypes from 'prop-types';

const ExportCSVButton = ({ data, fileName }) => {
  const exportToCSV = () => {
    const csvRows = [];
    const headers = [
      'id_projeto',
      'modalidade',
      'unidade_origem',
      'titulo_projeto',
      'area_conhecimento',
      'area_tematica',
      'linha_tematica',
      'coord_projeto',
      'email_coord_projeto',
      'dt_inicio_proj',
      'dt_fim_proj',
      'situacao',
      'ult_alter_proj',
      'palavras_chave',
      'resumo',
      'parcerias'
    ];
    csvRows.push(headers.join(','));

    data.forEach(projeto => {
      const row = [
        projeto.id_projeto,
        projeto.modalidade,
        projeto.unidade_origem,
        projeto.titulo_projeto,
        projeto.area_conhecimento,
        projeto.area_tematica,
        projeto.linha_tematica,
        projeto.coord_projeto,
        projeto.email_coord_projeto,
        projeto.dt_inicio_proj,
        projeto.dt_fim_proj,
        projeto.situacao,
        projeto.ult_alter_proj,
        projeto.palavras_chave,
        projeto.resumo,
        projeto.parcerias
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={exportToCSV}>
      Exportar para CSV
    </button>
  );
};

ExportCSVButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fileName: PropTypes.string.isRequired,
};

export default ExportCSVButton;
