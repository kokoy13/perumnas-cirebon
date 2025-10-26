import { useState } from "react"
import Facility from "../assets/img/facility.png"
import { GraduationCap, ShoppingCart, Building, Route, TrainFront, Hospital, X } from "lucide-react"
import ponpes from "../assets/img/ponpes.jpg"
import mall from "../assets/img/mall.jpeg"
import pemda from "../assets/img/pemda.jpg"
import tol from "../assets/img/tol.jpg"
import rsud from "../assets/img/rsud.jpg"
import stasiun from "../assets/img/stasiun.jpeg"

const Location = () => {
  const [selectedFacility, setSelectedFacility] = useState(null)

  const facilities = [
    {
      id: 1,
      name: "Ponpes Al-Bahjaj",
      description: "0 Menit ke Ponpes Al-Bahjaj",
      icon: <GraduationCap className="w-6 h-6" />,
      image: ponpes,
    },
    {
      id: 2,
      name: "Pasar Modern",
      description: "5 Menit ke Pasar Modern",
      icon: <ShoppingCart className="w-6 h-6" />,
      image: mall,
    },
    {
      id: 3,
      name: "Pemda Kab",
      description: "5 Menit ke Pemerintahan daerah Kabupaten",
      icon: <Building className="w-6 h-6" />,
      image: pemda,
    },
    {
      id: 4,
      name: "Tol Ciperna",
      description: "10 Menit ke Tol Ciperna",
      icon: <Route className="w-6 h-6" />,
      image: tol,
    },
    {
      id: 5,
      name: "RSUD Sumber Hurip",
      description: "7 Menit ke RSUD Sumber Hurip",
      icon: <Hospital className="w-6 h-6" />,
      image: rsud,
    },
    {
      id: 6,
      name: "Stasiun Cirebon",
      description: "15 ke Stasiun Cirebon",
      icon: <TrainFront className="w-6 h-6" />,
      image: stasiun,
    },
  ]

  return (
    <>
      <section id="location" className="relative min-h-screen px-6 py-16 md:px-12 lg:px-20 bg-contain overflow-hidden"
        style={{ 
            backgroundImage: `url(${Facility})`,
            backgroundAttachment: 'fixed',
            // backgroundPosition: '-300px center'
         }}
      >
        {/* <div className="absolute bg-black/50 inset-0"></div> */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/70"></div>


        <div className="relative z-10">
          {/* Main Grid Layout */}
          <div className="">

            {/* Right: Content Section */}
            <div className="flex flex-col justify-center space-y-32">
              {/* Header */}
              <div className="flex flex-col items-end mr-5 text-white">
                <p className="text-lg font-semibold tracking-wide">SAMESTA CIREBON REGENCY</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">Lokasi</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility) => (
                  <button
                    key={facility.id}
                    onClick={() => setSelectedFacility(facility)}
                    className="group flex flex-col items-center text-center space-y-8 cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    {/* Circular Icon */}
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <div className="text-teal-900">{facility.icon}</div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-white/90 transition-colors">
                        {facility.name}
                      </h3>
                      <p className="text-white max-w-xs text-sm leading-relaxed group-hover:text-white transition-colors">
                        {facility.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
              <img
                src={selectedFacility.image || "/placeholder.svg"}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedFacility.name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{selectedFacility.description}</p>
              <button
                onClick={() => setSelectedFacility(null)}
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Location
