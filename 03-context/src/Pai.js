import React, { useState } from 'react';
import MyContext from './context/MyContext';
import Filho from './Filho';

function Pai() {
  const [ cont, setCont ] = useState(4);
  const contextValue = {
    cont, setCont
  }
  return (
    <MyContext.Provider value={ contextValue }>
      <div >
        <Filho />
      </div>
    </MyContext.Provider>    
  );
}

export default Pai;
