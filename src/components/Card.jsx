// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeftRight, FileText, Waves, CircleDollarSign } from "lucide-react";

const items = [
  { id: 1, icon: <ArrowLeftRight size={48} />, text: "Jalan Utama Lebar 16M" },
  { id: 2, icon: <FileText size={48} />, text: "Legalitas sudah SHM" },
  { id: 3, icon: <Waves size={48} />, text: "Lingkungan Bebas Banjir" },
  { id: 4, icon: <CircleDollarSign size={48} />, text: "Kenaikan Nilai Aset 7-10%/Thn" },
];

// Variants animasi muncul dari kanan ke kiri
const fadeVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: (items.length - i - 1) * 0.3, // kanan muncul duluan
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Card() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animasi hanya sekali
    threshold: 0.2,    // muncul saat 20% elemen terlihat
  });

  return (
    <div ref={ref} className="relative hidden xl:flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            className={`relative h-48 w-96 z-${50 - i * 10} ${
              i === 0 ? "translate-x-[130px]" :
              i === 1 ? "translate-x-[50px]" :
              i === 2 ? "-translate-x-[30px]" :
              "-translate-x-[120px]"
            }`}
            variants={fadeVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i}
          >
            {/* Outline */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
              }}
            ></div>

            {/* Isi */}
            <div
              className="absolute inset-[5px] bg-teal-900 flex flex-col gap-3 items-center justify-center text-white text-xl font-semibold"
              style={{
                clipPath: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)",
              }}
            >
              {item.icon}
              <h1 className="text-wrap max-w-48 text-center">{item.text}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
