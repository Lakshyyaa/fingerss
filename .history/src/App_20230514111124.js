import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function calculateSquare() {
    const square = count * count;
    return square;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment Count</button>
      <h1>Square: {calculateSquare()}</h1>
    </div>
  );
}

export default App;
