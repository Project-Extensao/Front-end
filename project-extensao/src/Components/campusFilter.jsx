import PropTypes from 'prop-types';

const CampusFilter = ({ selectedCampus, handleCampusChange }) => {
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

  return (
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
  );
};


CampusFilter.propTypes = {
  selectedCampus: PropTypes.string.isRequired,
  handleCampusChange: PropTypes.func.isRequired,
};

export default CampusFilter;