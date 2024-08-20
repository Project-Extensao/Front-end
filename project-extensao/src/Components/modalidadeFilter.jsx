import PropTypes from 'prop-types';

const ModalidadeFilter = ({ selectedModalidade, handleModalidadeChange, modalidades }) => {
  return (
    <div>
      <label htmlFor="modalidade-filter">Filtrar por Modalidade:</label>
      <select
        id="modalidade-filter"
        value={selectedModalidade}
        onChange={(e) => handleModalidadeChange(e.target.value)}
      >
        <option value="">Todas</option>
        {modalidades.map((modalidade, index) => (
          <option key={index} value={modalidade}>
            {modalidade}
          </option>
        ))}
      </select>
    </div>
  );
};

ModalidadeFilter.propTypes = {
  selectedModalidade: PropTypes.string.isRequired,
  handleModalidadeChange: PropTypes.func.isRequired,
  modalidades: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalidadeFilter;
