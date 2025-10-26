import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../assets/img/slide1.png";
import slide2 from "../assets/img/slide2.png";
import slide3 from "../assets/img/slide3.png";

const items = [
  { id: 1, title: "Perumnas", img: slide1 },
  { id: 2, title: "Pesona Cirebon Regency", img: slide2 },
  { id: 3, title: "Samesta Pesona Cirebon Regency", img: slide3 },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  // ⏱️ Ganti slide otomatis tiap 3 detik
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval); // bersihkan saat unmount
  }, [index]); // dependensi index agar tetap sinkron

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={items[index].id}
          src={items[index].img}
          alt={items[index].title}
          className="w-full h-96 lg:h-[440px] object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Tombol navigasi */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 backdrop-blur-sm shadow-md transition"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 backdrop-blur-sm shadow-md transition"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 pb-8 right-0 bg-linear-to-t from-black/60 to-transparent text-white p-4 text-center">
        <h2 className="text-lg font-semibold">{items[index].title}</h2>
      </div>

      {/* Dots navigasi */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white scale-110" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
