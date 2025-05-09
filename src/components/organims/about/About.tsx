import { useTranslation } from "react-i18next";
import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";
import about3 from "../../../assets/images/about3.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="w-full mt-20">
        <div className="w-11/12 mx-auto text-white pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#AE9152] to-[#513E15] bg-clip-text text-transparent">
            {t("about.title")}
          </h1>
        </div>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="hidden md:block mt-10"
        >
          <div
            ref={ref}
            className="relative flex flex-col md:flex-row w-full h-56 bg-black mt-10 mb-20"
          >
            <div className="relative w-1/2 h-full">
              <img
                src={about1}
                alt="Безопасность"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
              <div className="absolute top-0 left-[-8%] w-40 h-full bg-[#252525] -skew-x-[20deg]"></div>
              <div>
                <h2 className="md:text-4xl lg:text-6xl">
                  {t("about.banner1")}
                </h2>
                <p className="text-sm mt-2">{t("about.banner1.1")}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="block md:hidden mt-10"
        >
          <div className="w-4/5 h-full">
            <img
              src={about1}
              alt="Безопасность"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-[#252525] -pl-10 h-40 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl ">{t("about.banner1")}</h2>
            <p className="text-sm mt-2">{t("about.banner1.1")}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="hidden md:block"
        >
          <div className="relative flex w-full h-56 bg-black mt-10 mb-20">
            <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
              <div className="absolute top-0 left-[90%] w-40 h-full bg-[#252525] skew-x-[20deg] z-10"></div>
              <div className="text-end">
                <h2 className="md:text-4xl lg:text-6xl">
                  {t("about.banner2")}
                </h2>
                <p className="text-sm mt-2">{t("about.banner2.1")}</p>
              </div>
            </div>
            <div className="relative w-1/2 h-full">
              <img
                src={about2}
                alt="Безопасность"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="block md:hidden mt-10"
        >
          <div className="w-full h-full flex justify-end">
            <img
              src={about2}
              alt="Безопасность"
              className="w-3/4 h-full object-cover"
            />
          </div>
          <div className="w-full h-40 bg-[#252525] text-white flex flex-col justify-center items-center order-5">
            <h2 className="text-4xl">{t("about.banner2")}</h2>
            <p className="text-sm mt-2">{t("about.banner2.1")}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="hidden md:block"
        >
          <div className="relative flex w-full h-56 bg-black mt-10 mb-20">
            <div className="relative w-1/2 h-full">
              <img
                src={about3}
                alt="Безопасность"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
              <div className="absolute top-0 left-[-8%] w-30 h-full bg-[#252525] -skew-x-[20deg]"></div>
              <div className="pl-10">
                <h2 className="md:text-4xl lg:text-6xl">
                  {t("about.banner3")}
                </h2>
                <p className="text-sm mt-2">{t("about.banner3.1")}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="block md:hidden mt-10"
        >
          <div className="relative w-4/5 h-full">
            <img
              src={about3}
              alt="Безопасность"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-[#252525] -pl-10 h-40 flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl">{t("about.banner3")}</h2>
            <p className="text-sm mt-2">{t("about.banner3.1")}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
