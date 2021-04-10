
import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function Number() {

  const { createFilter, updateCart, setName, name, filters: { filterByNumericValues },
  } = useContext(TodoContext);

  function renderUpdate() {
   return filterByNumericValues.map((element, index) => {
     return (
       <div key={ index }>
          {
            <button onClick={() => updateCart(element.column, 'Novo Valor')}>{element.column}</button>
          }
       </div>
     )
   })   
  }

  const renderTable = () => (
    <div>
      <input onChange={({ target }) => setName( target.value )}></input>
      <button
        type="button" 
        onClick={ () => createFilter(name, 'maior que', '100000') }
      >
        Adicionar
      </button>
    </div>
  );

  return (
    <div>  
      { renderTable() }
      { renderUpdate() }
    </div>
  );
}

export default Number;