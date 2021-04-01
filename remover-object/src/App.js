import React from 'react';
import TodoProvider from './context/TodoProvider';
import Number from './components/Number';

function App() {
  return (
    <div>
     <TodoProvider>
        <Number />  
     </TodoProvider>
    </div>
  );
}

export default App;
