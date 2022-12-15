// Libraries
import { useState } from 'react';

// CSS
import './App.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import ComplexComponent from './components/ComplexComponent';

// Contexts
import OurContext from './contexts/OurContext';

// Assets
import logo from './logo.svg'


function App() {
  const [ state, setState ] = useState(true)

  return (
    <OurContext.Provider value={state}>
      <div className="App">
        <Header />
        <img src={logo} />
        <button onClick={() => setState((oldState) => !oldState)}>Change state</button>
        <Main />
      </div>
    </OurContext.Provider>
  );
}


export default App;
