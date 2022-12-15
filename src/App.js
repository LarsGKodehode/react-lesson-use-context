import { useState, createContext, useContext } from 'react';

// CSS
import './App.css';

// Create context
const OurContext = createContext(null)


function App() {
  const [ state, setState ] = useState(true)

  return (
    <OurContext.Provider value={state}>
      <div className="App">
        <Header />
        <button onClick={() => setState((oldState) => !oldState)}>Change state</button>
        <Main />
      </div>
    </OurContext.Provider>
  );
}

function Header() {
  return (
    <header>
      <a>Homepage</a>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h1>Main Component</h1>
      <Component1 />
      <Component2 />
    </main>
  )
}

function Component1() {
  return (
    <div>
      <h2>Component1</h2>
    </div>
  )
}

function Component2() {
  const shouldRender = useContext(OurContext)

  return (
    <div>
      <h2>Component2</h2>
      {
        shouldRender &&
        <p>This should be conditionally rendered</p>
      }
    </div>
  )
}


export default App;
