import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var today  = new Date(data.time);
      setCurrentTime(today.toLocaleDateString("en-US", options));
      // setCurrentTime(today.toLocaleDateString("hi-IN", options));
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
