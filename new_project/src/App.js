import React from 'react';
import './App.css';
import MultipleCard from '../src/layout/MultipleCard';
import Footer from '../src/layout/footer';

function App() {
  return (
    <div className="App">
      {/* <h1>Multiple Card Component Example</h1> */}
      <MultipleCard />
      <Footer />
    </div>
  );
}

export default App;