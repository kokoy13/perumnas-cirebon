import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Lumea from "../assets/img/lumea.png"
import Lumea2 from "../assets/img/lumea2.png"
import Lumea3 from "../assets/img/lumea3.png"
import vilda from "../assets/img/vilda.png"
import vilda2 from "../assets/img/vilda2.png"
import lunora from "../assets/img/lunora.png"
import lunora2 from "../assets/img/lunora2.png"
import arsava from "../assets/img/arsava.png"
import arsava2 from "../assets/img/arsava2.png"
import lavina from "../assets/img/lavina.png"
import lavina2 from "../assets/img/lavina_2.png"
import lavina3 from "../assets/img/lavina3.png"

export default function Product() {
  const [activeType, setActiveType] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const types = [
    {
      id: 0,
      name: "Tipe Lumea",
      images: [
        Lumea, Lumea2, Lumea3
      ],
    },
    {
      id: 1,
      name: "Tipe Vilda",
      images: [
        vilda, vilda2
      ],
    },
    {
      id: 2,
      name: "Tipe Lunora",
      images: [
        lunora, lunora2
      ],
    },
    {
      id: 3,
      name: "Tipe Arsava",
      images: [
        arsava, arsava2
      ],
    },
    {
      id: 4,
      name: "Tipe Lavina",
      images: [
        lavina, lavina2, lavina3
      ],
    },
  ]

  const currentType = types[activeType]
  const totalImages = currentType.images.length

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  const handleTypeChange = (typeId) => {
    setActiveType(typeId)
    setCurrentImageIndex(0)
  }

  return (
    <section id="product" className="w-full bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="relative flex items-center justify-center gap-8">
            {/* Left Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg transition-all hover:bg-teal-800 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-2xl">
              <div className="aspect-video bg-gray-200">
                <img
                  src={currentType.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${currentType.name} - Image ${currentImageIndex + 1}`}
                  className="h-[520px] w-full transition-opacity duration-500"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {currentImageIndex + 1} / {totalImages}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg transition-all hover:bg-teal-800 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Image Indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "w-8 bg-teal-700" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Type Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Tipe</h2>
        </div>

        {/* Type Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`flex-1 min-w-[200px] rounded-lg px-6 py-3 font-semibold transition-all ${
                activeType === type.id
                  ? "bg-teal-700 text-white shadow-lg"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
