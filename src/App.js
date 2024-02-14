import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
    console.log('State changed:', count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
    console.log('State changed:', count - 1);
  };

  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      <div>
        <button className="button" onClick={handleAdd}>Add</button>
        <button className="button" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default App;
