import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [array, setArray] = useState([]);

  function hundleClick() {
    setArray([...array, 'Array']);    
  } 

  const context = {
    array,
    hundleClick,
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