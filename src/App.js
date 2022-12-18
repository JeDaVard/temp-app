import React from 'react';
import logo from './logo.svg';
import './App.css';
import i from './i4.jpg'

function App() {
  const [count, setCount] = React.useState("12:05:21");
  setTimeout(() => {
    setCount(new Date().toLocaleTimeString().slice(0, 8));
  }, 1000);
  return (
    <div className="App">
      <img src={i} alt className="Image" />
      <div className="Dates">2022-12-19  {count}</div>
    </div>
  );
}

export default App;
