import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import item1 from "../../../assets/images/item1.jpg";
import item2 from "../../../assets/images/items2.jpg";
import item3 from "../../../assets/images/item3.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Banner = () => {
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation();

  const data = [
    {
      title: "BAY TASH TOWER",
      description: t("banner.description1"),
      img: item1,
    },
    {
      title: "BAY TASH CITY",
      description: t("banner.description2"),
      img: item2,
    },
    {
      title: "ELITE RESIDENCE",
      description: t("banner.description3"),
      img: item3,
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="relative w-full h-screen flex flex-col items-center justify-center min-h-screen bg-black">
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
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="w-full absolute">
            <div className=" w-11/12 mx-auto h-screen flex items-center justify-between gap-8 ">
              <div className="h-full flex items-end mb-40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected}
                    className="p-8 max-w-lg text-white rounded-lg bg-black/70 shadow-2xl 
                 sm:w-full sm:max-w-md sm:p-4  flex flex-col justify-start items-start gap-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-base md:text-md lg:text-xl font-bold">
                      {data[selected].title}
                    </h1>
                    <p className="mt-2 text-xs md:text-base lg:text-md">
                      {data[selected].description}
                    </p>
                    <Link to="/baytashgroup">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="w-auto px-4 py-2 text-white bg-[#EAA000] rounded-2xl cursor-pointer"
                      >
                        {t("banner.aboutComp")}
                      </motion.button>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col h-full justify-center gap-4 sm:gap-6 md:gap-10">
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
                      className="w-20 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full border-2 border-white shadow-lg"
                      initial={{ opacity: 0, scale: 0.8, y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0], // bounce effect
                      }}
                      transition={{
                        duration: 0.5, // для opacity и scale
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
