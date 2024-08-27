import PropTypes from 'prop-types';

const AnoFilter = ({ selectedAno, handleAnoChange, anos }) => {
  return (
    <div>
      <label htmlFor="ano-filter">Filtrar por Ano:</label>
      <select
        id="ano-filter"
        value={selectedAno}
        onChange={(e) => handleAnoChange(e.target.value)}
      >
        <option value="">Todos</option>
        {anos.map((ano, index) => (
          <option key={index} value={ano}>
            {ano}
          </option>
        ))}
      </select>
    </div>
  );
};

AnoFilter.propTypes = {
  selectedAno: PropTypes.string.isRequired,
  handleAnoChange: PropTypes.func.isRequired,
  anos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnoFilter;



