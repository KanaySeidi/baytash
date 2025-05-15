import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useComplexeStore } from "../../../api/complexStore/complexStore";
import buildLogo from "../../../assets/icon/zdanie.svg";
import { motion } from "framer-motion";
import item1 from "../../../assets/images/city.webp";
import item2 from "../../../assets/images/item3.webp";
import item3 from "../../../assets/images/item2.webp";

import lines from "../../../assets/images/LINES.svg";
import { Loader } from "../../organims/loader/Loader";
import Error from "../error/Error";
import ImageModal from "../../molekulas/imageModal/ImageModal";
import GSliderWithModal from "../../organims/gslider/GSlider";

const Complexe = () => {
  const { id } = useParams();
  const numericId = String(id);

  console.log(numericId);
  console.log(typeof numericId);

  const { t, i18n } = useTranslation();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const { complex, fetchComplexesById, loading, error } = useComplexeStore();

  useEffect(() => {
    if (id) {
      fetchComplexesById(Number(id));
    }
  }, [id, i18n.language]);

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!complex) return null;

  const prjFeat1 = [
    { id: 1, description: t("city.projectFeat1.1"), img: buildLogo },
    { id: 2, description: t("city.projectFeat1.2"), img: buildLogo },
    { id: 3, description: t("city.projectFeat1.3"), img: buildLogo },
  ];
  const prjFeat2 = [
    { id: 1, description: t("city.projectFeat2.1"), img: buildLogo },
    { id: 2, description: t("city.projectFeat2.2"), img: buildLogo },
    { id: 3, description: t("city.projectFeat2.3"), img: buildLogo },
  ];
  const prjFeat3 = [
    { id: 1, description: t("city.projectFeat3.1"), img: buildLogo },
    { id: 2, description: t("city.projectFeat3.2"), img: buildLogo },
    { id: 3, description: t("city.projectFeat3.3"), img: buildLogo },
  ];

  const adress = [
    {
      id: 1,
      title: t("adress.1"),
    },
    {
      id: 2,
      title: t("adress.2"),
    },
    {
      id: 3,
      title: t("adress.3"),
    },
  ];

  const addressTitle = adress[Number(numericId) - 1]?.title;

  const prjImages = [item1, item2, item3];
  const imageIndex = Number(id) - 1;

  const getProjectFeatures = (id: number) => {
    switch (id) {
      case 1:
        return prjFeat1;
      case 2:
        return prjFeat2;
      case 3:
        return prjFeat3;
      default:
        return [];
    }
  };

  const scrollToPlans = () => {
    const element = document.getElementById("floor_plans");
    if (!element) return;

    let offset = -100;

    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      offset = -60;
    } else if (screenWidth < 1024) {
      offset = -80;
    }

    const y = element.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full bg-white relative">
      <div className="absolute w-full h-screen top-0 left-0">
        <img
          src={complex.main_image_url}
          alt={t("city.alt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative w-11/12 h-screen mx-auto pb-10">
        <div className="w-full h-full flex flex-col justify-end items-start gap-5 md:gap-8">
          <motion.h1
            initial={{ y: "-20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            className="text-white text-lg md:text-4xl lg:text-8xl font-bold"
          >
            {complex.name}
          </motion.h1>
          <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-10 text-[#EAA000] text-xs md:text-base font-medium list-disc ml-2 md:ml-0 lg:mt-20">
            <motion.li
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            >
              {complex.apartments_count} {t("city.info.0")}
            </motion.li>
            <motion.li
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 2 }}
            >
              {complex.floors_count} {t("city.info.1")}
            </motion.li>
            <motion.li
              initial={{ x: "-50%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 3 }}
            >
              {complex.entrances_count} {t("city.info.2")}
            </motion.li>
            <motion.li
              initial={{ x: "-40%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 4 }}
            >
              {complex.parking_count} {t("city.info.3")}
            </motion.li>
          </ul>
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 3 }}
            className="w-full lg:w-1/2 text-white text-xs md:text-base"
          >
            {complex.short_description}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ y: "-20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 4 }}
            className="w-auto px-4 py-2 text-xs md:text-base text-white bg-[#EAA000] rounded-lg"
            onClick={scrollToPlans}
          >
            {t("city.viewPlan")}
          </motion.button>
        </div>
      </div>
      <div className="absolute bg-[#141414] w-full h-[2200px] md:h-[2000px] lg:h-[1100px] pb-40 rounded-b-4xl">
        <img src={lines} alt="" className="relative pt-40" />
      </div>
      <div className="relative w-11/12 h-auto mx-auto mt-14 text-white">
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="flex items-center"
        >
          <div className="flex items-center gap-10 max-w-3xl">
            <h1 className="text-xl sm:text-4xl md:text-7xl whitespace-nowrap">
              {t("city.aboutTitle")}
            </h1>
            <p className="text-xs sm:text-base md:text-md">
              {t("city.aboutSub")}
            </p>
          </div>
          <p className="text-xs sm:text-base md:text-2xl font-semibold text-[#EAA000] w-auto px-10 whitespace-nowrap">
            Адрес: {addressTitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="w-full h-px bg-gray-200 rounded-4xl my-10"
        ></motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full h-[400px] md:w-1/2">
            <ImageModal src={prjImages[imageIndex]}>
              <div className="w-full h-[400px]">
                <motion.img
                  initial={{ x: "-20%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  src={prjImages[imageIndex]}
                  alt=""
                  className="rounded-4xl shadow-2xl w-full h-full object-contain"
                />
              </div>
            </ImageModal>
          </div>
          <div className="flex flex-col justify-between">
            <motion.p
              initial={{ y: "-20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="text-2xl lg:text-xl"
            >
              {t("city.aboutIntro")}
            </motion.p>
            {complex.advantages.map((item) => (
              <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                key={item.id}
                className="flex gap-5 items-center"
              >
                <img src={buildLogo} alt="" />
                <motion.p
                  initial={{ y: "-20%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                  className="text-white/70 text-justify py-2 md:py-0"
                >
                  {item.title}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex flex-col text-white w-full lg:w-1/2 gap-5">
            <motion.p
              initial={{ y: "-20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="text-2xl lg:text-base"
            >
              {t("city.advantagesTitle")}
            </motion.p>
            {getProjectFeatures(Number(id)).map((item) => (
              <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                className="flex gap-5"
                key={item.id}
              >
                <img src={item.img} alt="" />
                <motion.p
                  initial={{ y: "-20%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
            <motion.p
              initial={{ y: "-20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 2 }}
              className="text-justify"
            >
              {t("city.finalMessage")}
            </motion.p>
          </div>

          <motion.div
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 2 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col lg:flex-row w-full gap-10">
              <div className="flex flex-col justify-center items-start pl-10 gap-2 w-full h-40 bg-[#EAA000] rounded-4xl">
                <h1 className="text-6xl">
                  {t(`city.projectAdv.${numericId}.area`)}
                </h1>
                <p>{t(`city.projectAdv.${numericId}.areaLabel`)}</p>
              </div>
              <div className="flex flex-col justify-center items-start pl-10 gap-2 w-full h-40 border-2 border-[#EAA000] text-[#EAA000] rounded-4xl">
                <h1 className="text-6xl">
                  {t(`city.projectAdv.${numericId}.apartments`)}
                </h1>
                <p>{t(`city.projectAdv.${numericId}.apartmentsLabel`)}</p>
              </div>
            </div>
            <div className="w-full h-40 flex flex-col justify-center items-start pl-10 bg-[#EAA000] rounded-4xl">
              <h1 className="text-5xl md:text-6xl">
                {t(`city.projectAdv.${numericId}.commercial`)}
              </h1>
              <p className="text-xs md:text-base mt-4 md:mt-0">
                {t(`city.projectAdv.${numericId}.commercialLabel`)}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="w-11/12 mx-auto mt-56 text-[#252525]"
        >
          <div className="flex gap-10 items-center">
            <h1 className="text-4xl md:text-7xl">{t("city.galleryTitle")}</h1>
            <p className="w-full md:w-1/3 text-sm sm:text-md md:text-base">
              {t("city.gallerySub")}
            </p>
          </div>
          <div className="w-full mt-20 relative">
            <div className="w-full h-[400px] md:h-auto absolute left-0">
              <GSliderWithModal
                images={complex.gallery.map((img) => img.image_url)}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="w-11/12 mx-auto mb-10 mt-[600px]"
        >
          <h1 className="uppercase text-center text-4xl">
            {t("city.plansTitle")}
          </h1>
          <div className="w-full h-px rounded-4xl bg-gray-300 mt-4 mb-10"></div>
          <div
            id="floor_plans"
            className="w-full flex flex-col md:flex-row flex-wrap gap-4"
          >
            {complex.floor_plans.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[48%] lg:w-[32%] flex flex-col text-center gap-4"
              >
                <div className="bg-[#F0F0F0] h-[350px] rounded-4xl flex justify-center items-center overflow-hidden">
                  <img
                    src={item.image_url}
                    alt="Планировка"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <p className="font-medium text-base md:text-lg">
                  {item.description}
                </p>
                <button
                  className="w-full text-white bg-[#EAA000] rounded-4xl py-2 font-semibold"
                  onClick={() => setSelectedImg(item.image_url)}
                >
                  {t("city.viewPlan")}
                </button>
                {selectedImg === item.image_url && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setSelectedImg(null)}
                  >
                    <div
                      className="relative bg-white p-5 rounded-4xl shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={selectedImg}
                        alt="Планировка"
                        className="w-full max-w-2xl rounded-4xl"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "-20%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
          className="w-full rounded-t-4xl bg-[#252525]"
        >
          <div className=" w-11/12 mx-auto py-20">
            <div className="w-11/12 mx-auto text-white">
              <h1 className="text-base md:text-2xl lg:text-4xl uppercase font-semibold mb-4">
                {t("city.videoTitle")}
              </h1>
              <div className="w-full h-px rounded-4xl bg-gray-300 mb-14"></div>
              {complex.videos.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mb-10"
                >
                  <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <p className="text-sm md:text-lg lg:text-2xl">
                      {item.title}
                    </p>
                  </div>
                  <iframe
                    src={item.video_url}
                    className="w-full md:w-1/2 h-[320px] rounded-4xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.title}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-xl md:text-5xl text-white text-center uppercase">
                {t("city.feedback")}
              </p>

              <div className="w-full h-px bg-gray-300 my-10 rounded-4xl"></div>

              <div className="flex justify-between gap-5 h-14 my-10 font-semibold text-xs md:text-base">
                <motion.div
                  onClick={() => window.open("https://wa.me/+996505903333")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="bg-[#EAA000] text-black w-full flex justify-center items-center rounded-4xl cursor-pointer"
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
                  className="bg-[#EAA000] text-black w-full flex justify-center items-center rounded-4xl cursor-pointer"
                >
                  <p>0552 903 333</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Complexe;
