/* 
  {
  filters:
    {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        }
      ]
    }
  }
}  
*/

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

  const context = {
    filters: getFilters,   
    createFilter,  
    setName, 
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