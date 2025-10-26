import hero from "../assets/img/hero-bg.png"
import iconHero from "../assets/img/icon-color.png"
import bumn from "../assets/img/bumn.png"
import perumnas from "../assets/img/perumnas.png"
import { Search } from "lucide-react"

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
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/70"></div>

            {/* left */}
            <div className="absolute hidden lg:block top-10 left-5">
                <img className="w-36" src={bumn} alt="" />
            </div>
            {/* middle */}
            <div className="absolute hidden lg:block top-5 left-[45%]">
                <img className="w-36" src={iconHero} alt="" />
            </div>
            {/* right */}
            <div className="absolute hidden lg:block top-10 right-20">
                <img className="w-36" src={perumnas} alt="" />
            </div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12"
                
            >
                {/* Hero Content */}
                <div className="w-full">
                    <div className="mb-6 flex justify-center">
                        <div className="inline-block bg-linear-to-r from-teal-900 to-teal-800 text-white px-6 py-3 rounded-full mb-4">
                            <p className="text-xs font-bold tracking-widest uppercase">Samesta Cirebon Regency</p>
                        </div>
                    </div>

                    <h1 className="text-5xl text-center lg:text-6xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] mb-6 leading-tight">
                        Samesta : Pesona Cirebon Regency
                    </h1>

                    <div className="flex justify-center">
                        <p className="text-lg text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] max-w-3xl mb-8 leading-relaxed text-center">
                            Pesona Cirebon Regency adalah proyek perumahan unggulan dari Perum Perumnas, 
                            satu-satunya developer Badan Usaha Milik Negara (BUMN) di Cirebon. Berlokasi 
                            strategis di Jl. Pesona Raya, Sendang, Kecamatan Sumber, Cirebon, Jawa Barat.
                        </p>
                    </div>

                    <div className="flex gap-3 justify-center">
                        <a href="#about" className="bg-teal-900 hover:cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                            Explore More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero