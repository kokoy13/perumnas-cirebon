import Carousel from "./Carousel";
import Card from "./Card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <Carousel/>

                <div>
                    <h2 className="text-4xl font-bold text-teal-900 mb-6">Samesta Cirebon Regency</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed indent-5 max-w-2xl">
                        Pesona Cirebon Regency menawarkan hunian berkualitas dengan lingkungan yang nyaman dan aman. 
                        Dengan legalitas yang terjamin serta bebas dari risiko banjir.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed indent-5 max-w-2xl">
                        Pesona Cirebon Regency menjadi pilihan ideal bagi keluarga yang mencari rumah impian di kawasan berkembang. 
                        Sebagai proyek dari developer terpercaya, perumahan ini dirancang untuk mendukung kebutuhan hunian modern dengan akses yang mudah ke berbagai fasilitas umum.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <a href="#living" className="bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                            Find More
                        </a>
                    </div>
                </div>
            </div>
            <Card/>
        </div>
    </section>
  );
}
