// Libraries
import { useContext } from "react"

// Contexts
import OurContext from "../contexts/OurContext"

function Header() {
  const context = useContext(OurContext)

  return (
    <header>
      <a>Homepage</a>
      <button onClick={context.toggleState}>Change state</button>
    </header>
  )
}

export default Header