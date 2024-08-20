import { useState, useEffect } from 'react';

const useFilteredProjects = (projetos, selectedCampus, otherFilters = {}) => {
  const [filteredProjetos, setFilteredProjetos] = useState([]);

  useEffect(() => {
    let filtered = projetos;

    if (selectedCampus) {
      filtered = filtered.filter(projeto => projeto.unidade_origem === selectedCampus);
    }

  
    

    setFilteredProjetos(filtered);
  }, [projetos, selectedCampus, otherFilters]);

  return filteredProjetos;
};

export default useFilteredProjects;
