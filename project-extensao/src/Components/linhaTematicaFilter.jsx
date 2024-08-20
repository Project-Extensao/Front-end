
import PropTypes from 'prop-types';

const LinhaTematicaFilter = ({ selectedLinha, handleLinhaChange, linhasTematicas }) => {
  return (
    <div>
      <label htmlFor="linha-tematica-filter">Filtrar por Linha Temática:</label>
      <select
        id="linha-tematica-filter"
        value={selectedLinha}
        onChange={(e) => handleLinhaChange(e.target.value)}
      >
        <option value="">Todas</option>
        {linhasTematicas.map((linha, index) => (
          <option key={index} value={linha}>
            {linha}
          </option>
        ))}
      </select>
    </div>
  );
};

LinhaTematicaFilter.propTypes = {
  selectedLinha: PropTypes.string.isRequired,
  handleLinhaChange: PropTypes.func.isRequired,
  linhasTematicas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LinhaTematicaFilter;
