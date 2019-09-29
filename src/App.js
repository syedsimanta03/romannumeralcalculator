import React from 'react';
import './App.css';
import RomanNumeralComponent from './RomanNumeralComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: "#153D5C"}}>
      <img alt="No photo description available." 
          src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/40454445_490869574712396_8741758426033422336_n.png?_nc_cat=109&amp;_nc_oc=AQnvDU1wyVcbcH0ghUmxqaxvN6aBY6Mrj8r0Ofwb4K9ZpduFM_pEMzWCidfdEeaCo2ZGQjcXGdeoHh5tNRmPopxE&amp;_nc_ht=scontent-lax3-2.xx&amp;oh=4f29bcaa2f8f62b369151b65b5845073&amp;oe=5E3A8A56" 
          style={{width: "200px", height: "200px"}} />
        <RomanNumeralComponent />
      </header>
    </div>
  );
}

export default App;
