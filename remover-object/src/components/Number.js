import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function Number() {

  const { createFilter, setName, removedFilter, filters: { filterByNumericValues },
  } = useContext(TodoContext);

  const removedFilterNumeric = () => (
    <div>
      {filterByNumericValues.map((item, index) => (
        <div key={ index } data-testid="filter">      
            <button type="button" onClick={ () => removedFilter(index) }>Remover</button>     
        </div>
      ))}
    </div>
  );

  const renderTable = () => (
    <div>
      <input onChange={({ target }) => setName( target.value )}></input>
      <button
        type="button" 
        onClick={ () => createFilter('population4', 'maior que', '100000') }
      >
        Adicionar
      </button>
    </div>
  );

  return (
    <div>
      {removedFilterNumeric()}
      {renderTable()}
    </div>
  );
}

export default Number;