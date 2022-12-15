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

  function toggleState() {
    setState(
      (oldState) => !oldState
    )
  }

  const context = {
    shouldRender: state,
    toggleState: toggleState
  }

  return (
    <OurContext.Provider value={context}>
      <div className="App">
        <Header />
        <img src={logo} />
        <Main />
      </div>
    </OurContext.Provider>
  );
}


export default App;
