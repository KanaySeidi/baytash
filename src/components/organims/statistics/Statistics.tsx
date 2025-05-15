import statis3 from "../../../assets/images/statis3.jpg";
import blockLogo from "../../../assets/icon/bLogo.svg";
import AnimatedCounter from "../../molekulas/animateNumber/AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { IKeyFigure, useHomeStore } from "../../../api/homeStore/homeStore";
import ImageModal from "../../molekulas/imageModal/ImageModal";

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
        {data?.perfection_blocks.map((item) => (
          <div className="flex justify-between text-white items-start gap-5 md:gap-10">
            <div className="hidden md:flex gap-10">
              <ImageModal src={item.icon_url}>
                <motion.img
                  initial={{ y: "-20%", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src={item.icon_url}
                  alt="здание"
                  className="w-96 h-44 object-cover rounded-xl"
                />
              </ImageModal>

              <ImageModal src={item.image_url}>
                <motion.img
                  initial={{ y: "-20%", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                  src={item.image_url}
                  alt="здание"
                  className="w-[1400px] h-96 rounded-xl object-cover"
                />
              </ImageModal>
            </div>
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
        ))}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 md:gap-10 text-white mt-20">
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
                    className="text-6xl font-bold text-[#EAA000]"
                  />
                  <span className="text-4xl font-bold text-[#EAA000]">
                    {suffix}
                  </span>
                </div>
                <p className="text-sm text-[#EAA000]">{item.subtitle}</p>
              </div>
            );
          })}

          <ImageModal src={statis3}>
            <img src={statis3} alt="здание" className="block rounded-4xl" />
          </ImageModal>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
