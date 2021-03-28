import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function Filho() {

  const { array, hundleClick } = useContext(TodoContext);  

  return (
    <div>
        <button onClick={hundleClick}>Click</button>
        {array.map((item, index) => <p key={ index }>{ item }</p>)}    
    </div>
  );
}

export default Filho;
