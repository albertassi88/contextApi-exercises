import React, { useState } from 'react';

function App() {  
  const [ counter, setCounter ] = useState(0);

  return (
        <div>
          <p>State: {counter}</p>
          <button onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
  );
}

export default App;
