import React from 'react';
import logo from './logo.svg';
import './App.css';
import i from './i4.jpg'
import j from './j1.jpg'

function App() {
  const [count, setCount] = React.useState("12:05:21");
  const [nextPage, setNextPage] = React.useState(false);
  setTimeout(() => {
    setCount(new Date().toLocaleTimeString().slice(0, 8));
  }, 1000);
  return (
    <div className="App">
      {nextPage ? ( <>
        <img src={j} alt className="Image" />
        <div className="asdasd2" onClick={() => setNextPage(false)} />
      </>) : (<>
        <img src={i} alt className="Image" />
        <div className="Dates">2022-12-19  {count}</div>
        <div className="asdasd" onClick={() => setNextPage(true)} /></>)}
    </div>
  );
}

export default App;
