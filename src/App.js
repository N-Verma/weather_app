import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
        <h2>React Weather App</h2>
      </header>
      <main>
        <Forecast/>
        
      </main>
      <footer>Created By Nikhil Verma </footer>
    </div>
  );
}

export default App;
