import React from 'react';
import MyContext from '../context/MyContext';

class Filho extends React.Component {
  render() {
    return (
      <div >
        <MyContext.Consumer>
            {
                value => (
                    <div>
                      <p>{`Eu tenho ${value.money}`}</p>
                      <button onClick={value.spendMoney}>Alterar</button>
                    </div>                    
                )
            }
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Filho;
