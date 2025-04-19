import { useTranslation } from "react-i18next";
import statis1 from "../../../assets/images/statis1.png";
import statis2 from "../../../assets/images/statis2.png";
import statis3 from "../../../assets/images/statis3.png";
import blockLogo from "../../../assets/icon/bLogo.svg";
import AnimatedCounter from "../../molekulas/animateNumber/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Statistics = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="w-full mt-20" ref={ref}>
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center text-white items-start gap-5 md:gap-10">
            <motion.img
              initial={{ y: "-20%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              src={statis1}
              alt="здание"
              className="h-auto hidden md:block"
            />
            <motion.img
              initial={{ y: "-20%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
              src={statis2}
              alt="здание"
              className="hidden md:block"
            />
            <motion.div
              className="flex flex-col gap-5"
              initial={{ y: "-20%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <img src={blockLogo} alt="" width={500} />
              <p className="text-justify mt-5">{t("stats.paragraph1")}</p>
              <p className="text-justify">{t("stats.paragraph2")}</p>
            </motion.div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 md:gap-2 text-white mt-20">
            <div className="flex flex-col gap-2 flex-wrap">
              <AnimatedCounter
                to={25}
                duration={1.5}
                className="text-6xl font-bold text-yellow-500"
              />
              <p className="text-sm text-[#EAA000]">{t("stats.text1")}</p>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <AnimatedCounter
                to={1500}
                duration={3}
                className="text-6xl font-bold duration-1000"
              />
              <p className="text-sm"> {t("stats.text2")}</p>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <AnimatedCounter
                to={350000}
                duration={5}
                className="text-6xl font-bold"
              />
              <p className="text-sm">{t("stats.text3")}</p>
            </div>
            <img src={statis3} alt="здание" className="block " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
