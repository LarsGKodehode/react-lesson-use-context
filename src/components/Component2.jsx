// Libraries
import { useContext } from "react"

// Contexts
import OurContext from "../contexts/OurContext"

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


export default Component2