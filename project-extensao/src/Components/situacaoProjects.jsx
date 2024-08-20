
import PropTypes from 'prop-types';

const SituacaoFilter = ({ selectedSituacoes, handleSituacaoChange }) => {
  const situacoes = ["Registrado", "Finalizado"];

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Adiciona a situação à lista de selecionados
      handleSituacaoChange([...selectedSituacoes, value]);
    } else {
      // Remove a situação da lista de selecionados
      handleSituacaoChange(selectedSituacoes.filter((situacao) => situacao !== value));
    }
  };

  return (
    <div>
      <label>Filtrar por Situação:</label>
      {situacoes.map((situacao) => (
        <div key={situacao}>
          <input
            type="checkbox"
            value={situacao}
            checked={selectedSituacoes.includes(situacao)}
            onChange={handleChange}
          />
          <label>{situacao}</label>
        </div>
      ))}
    </div>
  );
};

SituacaoFilter.propTypes = {
  selectedSituacoes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSituacaoChange: PropTypes.func.isRequired,
};

export default SituacaoFilter;
