import React from 'react';
import EventCategories from './components/eventcategories';
import AddEvent from './components/AddEvent';
import SuccessEvent from './components/SuccessEvent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Management System</h1>
      </header>
      <main>
        <EventCategories />
        <AddEvent/>
        <SuccessEvent/>
      </main>
    </div>
  );
}

export default App;
