import Hero from "../Pages/Hero";
import Navbar from "../Pages/Navbar";
import Pricing from "../Pages/Pricing";
import About from "../Pages/About";
import Features from "../Pages/Features"
import Footer from "../shared/Footer"

;

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <About/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home