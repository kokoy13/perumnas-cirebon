import {ArrowLeftRight, FileText, Waves, CircleDollarSign} from "lucide-react"

const Card = () => {
  return (
    <div className="relative hidden xl:flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        {/* Item 1 */}
        <div className="relative h-48 w-96 z-40 translate-x-[130px]">
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          ></div>
          <div
            className="absolute gap-3 inset-[5px] bg-teal-900 flex flex-col items-center justify-center text-white text-xl font-semibold"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          >
            <ArrowLeftRight size={48}/>
            <h1 className="text-wrap max-w-48 text-center">Jalan Utama Lebar 16M</h1>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative h-48 w-96 z-30 translate-x-[50px]">
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          ></div>
          <div
            className="absolute flex-col gap-3 inset-[5px] bg-teal-900 flex items-center justify-center text-white text-xl font-semibold"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          >
            <FileText size={48}/>
            <h1 className="text-wrap max-w-48 text-center">Legalitas sudah SHM</h1>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative h-48 w-96 z-20 -translate-x-[30px]">
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          ></div>
          <div
            className="absolute flex-col gap-3 inset-[5px] bg-teal-900 flex items-center justify-center text-white text-xl font-semibold"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          >
            <Waves size={48}/>
            <h1 className="text-wrap max-w-48 text-center">Lingkungan Bebas Banjir</h1>
          </div>
        </div>

        {/* Item 4 */}
        <div className="relative h-48 w-96 z-10 -translate-x-[120px]">
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          ></div>
          <div
            className="absolute flex-col gap-3 inset-[5px] bg-teal-900 flex items-center justify-center text-white text-xl font-semibold"
            style={{
              clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
            }}
          >
            <CircleDollarSign size={48}/>
            <h1 className="text-wrap max-w-48 text-center">Kenaikan Nilai Aset 7-10%/Thn</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
