import React from 'react';
import EventCategories from './components/eventcategories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Management System</h1>
      </header>
      <main>
        <EventCategories />
      </main>
    </div>
  );
}

export default App;
