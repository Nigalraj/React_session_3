import React from 'react';
import './App.css'; 
import FormComponent from './components/Form';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Welcome to My React App</h1>
    </header>
    <main>
      <FormComponent />
    </main>
  </div>
  );
}

export default App;
