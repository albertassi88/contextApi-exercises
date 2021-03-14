import React, { useContext } from 'react';
import MyContext from './context/MyContext';

function Filho() {
    const { cont, setCont } = useContext(MyContext);
    return (
        <div>
            <p>State: {cont}</p>
            <button onClick={ () => setCont( cont + 4 ) }>Alterar</button>
        </div>
    )
}

export default Filho;