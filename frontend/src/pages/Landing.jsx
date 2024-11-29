import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"
import Hero from "../components/Landing/Hero"
import Feature from "../components/Landing/Feature"
import Book from "../components/Landing/Book"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feature/>
      <Book/>
      <Footer/>
    </div>
  )
}

export default Landing