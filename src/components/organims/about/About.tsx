import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { IAdvantage, useHomeStore } from "../../../api/homeStore/homeStore";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { data, fetchHomeData } = useHomeStore();

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <>
      <div className="w-full mt-20" ref={ref}>
        <div className="w-11/12 mx-auto text-white pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#AE9152] to-[#513E15] bg-clip-text text-transparent">
            {t("about.title")}
          </h1>
        </div>

        {data?.advantages.map((item: IAdvantage) => (
          <div>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="hidden md:block mt-10"
              key={item.id}
            >
              <div className="relative flex flex-col md:flex-row w-full h-56 bg-black mt-10 mb-20">
                <div className="relative w-1/2 h-full">
                  <img
                    src={item.icon_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
                  <div className="absolute top-0 left-[-8%] w-40 h-full bg-[#252525] -skew-x-[20deg]"></div>
                  <div>
                    <h2 className="md:text-4xl lg:text-6xl">{item.title}</h2>
                    <p className="text-sm mt-2">{item.description}</p>
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
                  src={item.icon_url}
                  alt="Безопасность"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full bg-[#252525] -pl-10 h-40 flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl ">{item.title}</h2>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
