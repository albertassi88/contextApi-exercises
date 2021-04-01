import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]); 

  function createFilter(column, comparison, value) {
    setFilters([...filters, { column, comparison, value }]);
  } 

  const getFilters = {
    filterByName: { name },
    filterByNumericValues: filters,
  };

  //Remover array object
  function removedFilter(index) {
    setFilters(filters.slice(0, index).concat(filters.slice(index + 1)));
  }

  const context = {
    filters: getFilters,   
    createFilter,  
    setName, 
    removedFilter,
  };

  return (
    <div>
      <TodoContext.Provider value={ context }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;