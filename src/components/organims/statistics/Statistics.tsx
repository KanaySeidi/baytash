import statis1 from "../../../assets/images/statis1.png";
import statis2 from "../../../assets/images/statis2.png";
import statis3 from "../../../assets/images/statis3.png";
import blockLogo from "../../../assets/icon/bLogo.svg";
import AnimatedCounter from "../../molekulas/animateNumber/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { IKeyFigure, useHomeStore } from "../../../api/homeStore/homeStore";

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { data, fetchHomeData } = useHomeStore();

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
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
            <img src={blockLogo} alt="" width={400} />
            {data?.perfection_blocks.map((item) => (
              <div className="flex flex-col gap-5">
                <p className="text-justify mt-5">{item.title}</p>
                <p className="text-justify">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 md:gap-2 text-white mt-20">
          {data?.key_figures.map((item: IKeyFigure) => {
            const match = item.title.match(/(\d+)(.*)/);
            const value = match ? parseInt(match[1]) : 0;
            const suffix = match ? match[2] : "";

            return (
              <div key={item.id} className="flex flex-col gap-2 flex-wrap">
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    to={value}
                    duration={1.5}
                    className="text-6xl font-bold text-yellow-500"
                  />
                  <span className="text-4xl font-bold text-yellow-500">
                    {suffix}
                  </span>
                </div>
                <p className="text-sm text-[#EAA000]">{item.subtitle}</p>
              </div>
            );
          })}

          <img src={statis3} alt="здание" className="block" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
