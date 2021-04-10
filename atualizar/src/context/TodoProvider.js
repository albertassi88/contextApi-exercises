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

  //Atualizar array object
  function updateCart(column, newColumn) {
    setFilters(filters.map(element => element.column === column ? {...element, column: newColumn} : element));
  } 

  const context = {
    filters: getFilters,   
    createFilter,  
    setName, 
    updateCart,
    name,
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
