import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import icon from "../assets/img/icon.png"
import perumnas from "../assets/img/perumnas-white.png"

const Navbar = () =>{
    const navItems = [
        { label: "HOME", href: "#home" },
        { label: "ABOUT", href: "#about" },
        { label: "DISTRIBUTION", href: "#living" },
        { label: "LOCATION", href: "#location" },
        { label: "PRODUCT", href: "#product" },
        { label: "SITEPLAN", href: "#siteplan" },
        { label: "CONTACT", href: "#contact" }
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return(
      <>
        <nav className="fixed right-0 top-0 h-screen w-80 2xl:w-60 bg-linear-to-b from-teal-900 via-teal-800 to-teal-900 text-white p-8 z-50 hidden xl:flex flex-col justify-between">
            <div>
                <div className="flex justify-center mb-12 pb-8 border-b border-teal-700">
                    <img className="w-80" src={icon} alt="" />
                </div>

                <ul className="space-y-6">
                    {navItems.map((item) => (
                    <li key={item.label} className="text-center">
                        <a
                        href={item.href}
                        className="text-sm font-semibold text-teal-50 hover:text-gray-900 transition-colors duration-300 tracking-wide"
                        >
                        {item.label}
                        </a>
                    </li>
                    ))}
                </ul>

                <div className="flex justify-center gap-3 mt-8 pt-8 border-t border-teal-700">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>

            <div className="text-center space-y-4 pt-8 border-t border-teal-700">
            <p className="text-xs text-teal-200 font-bold">Masterpiece By</p>

            <div className="flex justify-center">
                <img src={perumnas} alt="" />
            </div>

            <p className="text-xs font-bold text-teal-200">Copyright © 2025</p>
            <p className="text-sm font-bold text-white">Samesta Cirebon Regency</p>
            </div>
        </nav>

        <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden fixed top-4 right-4 z-40 p-2 bg-teal-900 text-white rounded"
        >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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
      </>
    )
}

export default Navbar