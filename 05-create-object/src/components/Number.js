import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function Number() {

  const { createFilter, setName } = useContext(TodoContext); 

  const renderTable = () => (
    <div>
      <input onChange={({ target }) => setName( target.value )}></input>
      <button
        type="button" 
        onClick={ () => createFilter('population', 'maior que', '100000') }
      >
        Click
      </button>
    </div>
  );

  return (
    <div>
      {renderTable()}
    </div>
  );
}

export default Number;