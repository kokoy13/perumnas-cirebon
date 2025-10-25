import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "ONE STOP LIVING", href: "#living" },
    { label: "FACILITY", href: "#facility" },
    { label: "PRODUCT", href: "#product" },
    { label: "PRICE LIST", href: "#price" },
    { label: "LOCATION", href: "#location" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Right Side */}
      <nav className="fixed right-0 top-0 h-screen w-64 bg-gradient-to-b from-teal-900 to-teal-800 text-white p-8 z-50 hidden lg:flex flex-col justify-between">
        <div>
          <h2 className="text-sm font-bold mb-8 text-teal-200">NAVIGATION</h2>
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-semibold hover:text-teal-200 transition-colors flex items-center gap-2"
                >
                  <ChevronRight size={16} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs text-teal-200 space-y-2">
          <p>Masterpiece By</p>
          <p className="font-bold text-white">Perumnas</p>
          <p className="mt-4">Copyright © 2025</p>
          <p className="font-bold">Samesta Mahata Serpong</p>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-40 p-2 bg-teal-900 text-white rounded"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed right-0 top-0 h-screen w-full bg-teal-900 text-white p-8 z-40 pt-16">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-semibold hover:text-teal-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:mr-64">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-50 flex items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="inline-block bg-teal-900 text-white px-4 py-2 rounded-lg mb-4">
                  <p className="text-sm font-bold">SAMESTA MAHATA SERPONG</p>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transit Oriented Development
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hunian berkonsep TOD ini memiliki prinsip perencanaan kota yang mengintegrasikan kepada ruang. Memiliki
                waktu luang untuk keluarga/beristrahat, pengurangan kemacetan dengan penggunaan kendaaan umum dan
                pengembangan desain yang lebih "compact".
              </p>

              <button className="bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                Explore More
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <p className="text-teal-900 font-semibold">Modern Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌆</div>
                  <p className="text-teal-900 font-semibold">Urban Living</p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">One Stop Living</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Konsep hunian terintegrasi transportasi yang menghadirkan kemudahan akses ke berbagai fasilitas publik
                  dan privat. Lokasi premium berada di jalan boulevard, tol Jakarta-Serpong dan hanya 5 menit dari
                  distrik baru bernilai tinggi.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Memiliki waktu luang untuk keluarga/beristrahat, pengurangan kemacetan dengan penggunaan kendaaan umum
                  dan pengembangan desain yang lebih "compact" menjadi poin penting dalam pembangunan hunian ini.
                </p>
                <button className="bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
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
        <section id="product" className="py-20 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
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
