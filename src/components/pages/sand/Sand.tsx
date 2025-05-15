import { useTranslation } from "react-i18next";
import sand from "../../../assets/images/sand.png";
import { motion } from "framer-motion";

const Sand = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[250px] md:h-[400px] lg:h-[886px] -z-10">
        <img src={sand} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 h-[250px] md:h-[400px] lg:h-[886px] flex flex-col justify-end lg:justify-center items-start w-11/12 mx-auto text-white">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-8xl">
          {t("sand.title")}
        </h1>
        <p className="w-full lg:w-1/3 mt-5 pb-10 lg:pb-0 text-xs sm-text-sm md:text-md lg:text-base">
          {t("sand.description")}
        </p>
      </div>
      <div className="w-full bg-black text-white">
        <div className="w-11/12 mx-auto py-20">
          <div className="w-full h-full flex flex-col justify-center items-center gap-10 pb-20">
            {t("sand.title")}
            <h1 className="text-xl md:text-5xl">{t("sand.project.title")}</h1>
            <p className="w-full md:w-1/2 text-justify">
              {t("sand.project.text")}
            </p>
          </div>
          <div className=" mt-10">
            <p className="text-xl md:text-5xl text-white text-center uppercase">
              {t("city.feedback")}
            </p>

            <div className="w-full h-px bg-gray-300 my-10 rounded-4xl"></div>

            <div className="flex justify-between gap-5 h-14 my-10 font-semibold text-xs md:text-base">
              <motion.div
                onClick={() => window.open("https://wa.me/+996505903333")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="border border-[#EAA000] text-[#EAA000] w-full flex justify-center items-center rounded-4xl cursor-pointer"
              >
                <p>0505 903 333</p>
              </motion.div>
              <motion.div
                onClick={() => window.open("https://wa.me/+996772903333")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-[#EAA000] text-black w-full flex justify-center items-center rounded-4xl cursor-pointer"
              >
                <p>0772 903 333</p>
              </motion.div>
              <motion.div
                onClick={() => window.open("https://wa.me/+996552903333")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="border border-[#EAA000] text-[#EAA000] w-full flex justify-center items-center rounded-4xl cursor-pointer"
              >
                <p>0552 903 333</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sand;
