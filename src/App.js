import React from 'react';
import './App.css';
import RomanNumeralComponent from './RomanNumeralComponent';

function App() {
  return (
    <div className='App'>
      <header className='App-header' style={{ backgroundColor: '#153D5C' }}>
        <div className='card'>
          <RomanNumeralComponent />
        </div>
      </header>
    </div>
  )
}

export default App;
