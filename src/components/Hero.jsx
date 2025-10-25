import hero from "../assets/img/hero-bg.png"
import iconHero from "../assets/img/icon-color.png"
import bumn from "../assets/img/bumn.png"
import perumnas from "../assets/img/perumnas.png"

const Hero = () =>{
    return(
        <section
          id="home"
          className="min-h-screen bg-center bg-cover flex items-center relative overflow-hidden"
          style={{ 
            backgroundImage: `url(${hero})`,
            backgroundAttachment: "fixed"
          }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                background: "linear-gradient(to bottom right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 1%, rgba(255,255,255,0) 45%)",
                }}
            >
            </div>
            {/* left */}
            <div className="absolute hidden lg:block top-14 left-5">
                <img className="w-48" src={bumn} alt="" />
            </div>
            {/* middle */}
            <div className="absolute hidden lg:block top-5 left-[45%]">
                <img className="w-48" src={iconHero} alt="" />
            </div>
            {/* right */}
            <div className="absolute hidden lg:block top-10 right-20">
                <img className="w-48" src={perumnas} alt="" />
            </div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12"
                
            >
                {/* Left Content */}
                <div className="flex-1">
                <div className="mb-6">
                    <div className="inline-block bg-teal-900 text-white px-4 py-2 rounded-lg mb-4">
                    <p className="text-sm font-bold">SAMESTA MAHATA SERPONG</p>
                    </div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
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
                <div className="bg-linear-to-br from-teal-100 to-teal-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-teal-900 font-semibold">Modern Development</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero