import { BrowserRouter, Route, Routes } from "react-router-dom"

import { lazy } from "react"
import { ReactLenis, useLenis } from 'lenis/react'
const Landing = lazy(() => import("./pages/Landing.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"))
const Product = lazy(() => import("./pages/Product.jsx"));
const Orders = lazy(() => import("./pages/Orders.jsx"));

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
            <Route path = "/cart" element = {<Cart></Cart>}/>
            <Route path = "/products" element = {<Product/>}/>
            <Route path = "/orders" element = {<Orders/>}/>
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