import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ReactLenis, useLenis } from 'lenis/react'
import Landing from "./pages/Landing"
import Login from "./pages/Login"

function Component() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      { /* content */ }
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Landing></Landing>}/>
            <Route path = "/login" element = {<Login></Login>}/>
          </Routes>
        </BrowserRouter>
    </ReactLenis>
  )
}


const App = () => {
  return (
    <div className="h-full w-full">
        <Component />
    </div>
  )
}

export default App