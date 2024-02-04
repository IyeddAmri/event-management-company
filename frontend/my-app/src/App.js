import logo from './logo.svg';
import './App.css';
import React from 'react';
// import EventCategories from './components/eventcategories';
// import AddEvent from './components/AddEvent';
// import SuccessEvent from './components/SuccessEvent';
import HomePage from './components/HomePage'; // Import the HomePage component

function App() {
  return (
    <div className="App">
      <header className="App-header">
   
       
        
        <h1 id='namepage'>E.M.S</h1>
      </header>
      <main>
        <HomePage /> {/* Include the HomePage component */}
        
        
       
      </main>
    </div>
  );
}
export default App