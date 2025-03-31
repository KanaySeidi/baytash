import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import item1 from "../../../assets/images/item1.jpg";
import item2 from "../../../assets/images/items2.jpg";
import item3 from "../../../assets/images/item3.jpg";

const data = [
  {
    title: "BAY TASH TOWER",
    description:
      "Жилой комплекс BAY TASH TOWER — это сочетание элегантности, современного дизайна и премиального комфорта...",
    img: item1,
  },
  {
    title: "BAY TASH CITY",
    description:
      "BAY TASH CITY — это современный жилой комплекс, воплощающий динамику городского стиля жизни...",
    img: item2,
  },
  {
    title: "ELITE RESIDENCE",
    description:
      "Это роскошь, безупречный вкус, абсолютный комфорт, полная гармония, непревзойденное качество...",
    img: item3,
  },
];

const Banner = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
      <motion.div
        key={selected}
        className="absolute inset-0 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img
          src={data[selected].img}
          alt=""
          className="w-full h-full object-cover md:h-[700px]"
        />
      </motion.div>
      <div className="absolute bottom-10 left-10 right-10 flex items-center justify-center gap-8 flex-nowrap flex-col md:flex-row sm:items-center sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2 sm:w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="p-8 max-w-lg text-white bg-black/60 rounded-lg shadow-lg 
                 sm:w-full sm:max-w-md sm:p-4 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xl font-bold">{data[selected].title}</h1>
            <p className="mt-2 text-md">{data[selected].description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 sm:gap-6 md:gap-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center cursor-pointer"
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelected(index)}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border-2 border-white shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
