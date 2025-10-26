import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import map from "./assets/img/map.png"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <Navbar/>      

      {/* Main Content */}
      <main className="lg:mr-64">
        {/* Hero Section */}
        <Hero/>

        {/* About Section */}
        <About/>

        <section id="living" className="w-full">
          <img src={map} alt="" />
        </section>

        {/* Features Section */}
        <section id="facility" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Premium Facilities</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🚇", title: "Transit Access", desc: "Direct access to public transportation" },
                { icon: "🏊", title: "Recreation", desc: "Swimming pool and fitness center" },
                { icon: "🌳", title: "Green Space", desc: "Landscaped gardens and parks" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="product" className="py-20 bg-linear-to-r from-teal-900 to-teal-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-lg mb-8 text-teal-100 max-w-2xl mx-auto">
              Join thousands of satisfied residents at Samesta Mahata Serpong. Experience modern living with
              transit-oriented convenience.
            </p>
            <button className="bg-white text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">About</h3>
                <p className="text-sm">Samesta Mahata Serpong - Transit Oriented Development</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#home" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#facility" className="hover:text-white">
                      Facilities
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Contact</h3>
                <p className="text-sm">Jakarta-Serpong Boulevard</p>
                <p className="text-sm">Indonesia</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <p className="text-sm">Social Media Links</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p>&copy; 2025 Samesta Mahata Serpong. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
