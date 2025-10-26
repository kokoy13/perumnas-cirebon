import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import map from "./assets/img/map.png"
import Location from "./components/Location"
import CTA from "./components/CTA"
import Product from "./components/Product"
import Siteplan from "./components/Siteplan"
import Contact from "./components/Contact"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <Navbar/>      

      {/* Main Content */}
      <main className="lg:mr-64 2xl:mr-60">
        <Hero/>
        <About/>
        <section id="living" className="w-full">
          <img className="w-full" src={map}   alt="" />
        </section>
        <Location/>
        <Product></Product>
        <Siteplan></Siteplan>
        <Contact></Contact>
        <CTA></CTA>
      </main>
    </div>
  )
}
