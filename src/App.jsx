import React from 'react';
import About from './components/About';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <About />
    </div>
  );
}

export default App;
