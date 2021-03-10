import React from 'react';
import MyContext from '../context/MyContext';
import Filho from './Filho';

class Pai extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        money: 1000000,
      }
      this.spendInheritance = this.spendInheritance.bind(this);
    }
    
    spendInheritance() {
        this.setState((prevState) => (
          { money: prevState.money - 1000 }
        ));
    }

  render() {
    const obj = {
        money: this.state.money,
        spendMoney: this.spendInheritance,
    };  
    return (
      <MyContext.Provider value={obj}>
        <div >
          <Filho />
        </div>
      </MyContext.Provider>  
      
    );
  }
}

export default Pai;
