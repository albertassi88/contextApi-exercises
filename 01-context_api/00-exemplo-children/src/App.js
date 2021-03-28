import React from 'react';
import TodoProvider from './context/TodoProvider';
import Filho from './components/Filho';

function App() {
  return (
    <TodoProvider>
      <Filho />  
    </TodoProvider>
  );
}

export default App;
