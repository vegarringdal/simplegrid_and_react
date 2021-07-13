import React, {useState, useEffect} from 'react';
import './App.css';
import {Test} from './Test'
import {DarkTheme} from './DarkTheme'

function App() {
  // Create the count state.
  const [count, setCount] = useState({something:0});
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount({something:count.something+1}), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
       <DarkTheme enabled={count.something % 2 === 0}/>
      <Test height="600" width="500" ></Test>
      {count.something}
    </div>
  );
}

export default App;