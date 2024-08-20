
import PropTypes from 'prop-types';

const AreaConhecimentoFilter = ({ selectedAreas, handleAreaChange, areasDeConhecimento }) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      handleAreaChange([...selectedAreas, value]);
    } else {
      handleAreaChange(selectedAreas.filter((area) => area !== value));
    }
  };

  return (
    <div>
      <label>Filtrar por Área de Conhecimento:</label>
      {areasDeConhecimento.map((area, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={area}
            checked={selectedAreas.includes(area)}
            onChange={handleChange}
          />
          <label>{area}</label>
        </div>
      ))}
    </div>
  );
};

AreaConhecimentoFilter.propTypes = {
  selectedAreas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAreaChange: PropTypes.func.isRequired,
  areasDeConhecimento: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AreaConhecimentoFilter;
