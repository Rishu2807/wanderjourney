import React from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animationData from './Lottie.json';

function App() {
  const lottieStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Set a negative value to place the Lottie animation behind other elements
  };

  return (
    <>
      <Lottie options={{ animationData }} isClickToPauseDisabled style={lottieStyle} />
      {/* <div style={{ textAlign: "center" }}>
        <h1>Hey</h1>
        <p>This is your content.</p>
      </div> */}
      <div className='main'>
        <div className='navbar'>
          <ul className='nav'>
            <li>
              Case Studies
            </li>
            <li>
              Experiments
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
        <div className='card1'>
          <h1>Riccardo Zanutta</h1>
          <h3>Interactive Front-end Developer</h3>
          <button>About Me</button>
        </div>
      </div>
    </>
  );
}

export default App;
