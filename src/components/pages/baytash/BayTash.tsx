import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useBaytashStore } from "../../../api/baytashStore/baytashStore";
import bLogo from "../../../assets/icon/bLogo.svg";
import { Loader } from "../../organims/loader/Loader";
import { motion } from "framer-motion";
import ImageModal from "../../molekulas/imageModal/ImageModal";
import GSliderWithModal from "../../organims/gslider/GSlider";

const BayTash = () => {
  const { t } = useTranslation();
  const { data, loading, fetchBaytash } = useBaytashStore();

  useEffect(() => {
    fetchBaytash();
  }, []);

  console.log(data);

  const buildingReliable = data?.blocks.find(
    (b) => b.block_type === "BUILDING RELIABLE"
  );

  const technicalBase = data?.blocks.find(
    (b) => b.block_type === "Техническая база"
  );
  const licenses = data?.blocks.filter((b) =>
    b.block_type.includes("Лицензии")
  );
  const projects = data?.blocks.filter(
    (b) => b.block_type === "CONTRACTOR WORKS"
  );
  const team = data?.blocks.find((b) => b.block_type === "Наши специалисты");

  const galleryImages =
    technicalBase?.gallery_images
      .map((g) => g.image_url)
      .filter((url): url is string => url !== null) || [];

  const baytash = data?.blocks.find(
    (b) => b.block_type === "Строим будущее с надежностью и качеством"
  );

  console.log(baytash);

  if (loading) return <Loader />;

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-screen -z-10">
        <img
          src={data?.main_image_url || ""}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-screen flex flex-col justify-end lg:justify-center items-start w-11/12 mx-auto text-white">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
          }}
          className="w-full lg:w-1/2 h-auto p-1 md:p-5 rounded-2xl"
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-8xl">
            {data?.title}
          </h1>
          <p className="w-full mt-5 pb-10 lg:pb-0 text-xs sm:text-sm md:text-md lg:text-base">
            {data?.description}
          </p>
        </motion.div>
      </div>
      <div className="w-full  bg-black text-white">
        <section className="w-11/12 mx-auto pt-20">
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 ">
            <div className="w-full lg:w-2/5 md:h-[300px] lg:h-full  hidden md:block">
              <ImageModal src={baytash?.image1_url as any}>
                <motion.img
                  initial={{ y: "-20%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  src={baytash?.image1_url as any}
                  alt=""
                  className="w-full"
                />
              </ImageModal>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-around">
              <ImageModal src={bLogo}>
                <motion.img
                  initial={{ y: "-20%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  src={bLogo}
                  alt=""
                  width={400}
                />
              </ImageModal>
              <motion.h1
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl mb-10"
              >
                {baytash?.title}
              </motion.h1>
              <motion.p
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              >
                {baytash?.description}
              </motion.p>
            </div>
          </div>
        </section>
        {buildingReliable && (
          <section className="w-11/12 mx-auto bg-black pt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
              <motion.p
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="w-full md:w-1/2 text-2xl font-thin "
              >
                {buildingReliable.title}
              </motion.p>
              <ImageModal src={buildingReliable.image1_url}>
                <motion.img
                  initial={{ y: "-20%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  src={buildingReliable.image1_url || undefined}
                  alt=""
                  className="rounded-2xl w-full md:w-1/2"
                />
              </ImageModal>
            </div>
          </section>
        )}
        <div className="w-full bg-black text-white">
          <motion.section
            initial={{ y: "-20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            className="w-11/12 mx-auto pt-20"
          >
            <h1 className="text-4xl">{t("licenses.title")}</h1>
            <div className="mt-10 flex flex-col md:flex-row w-full items-center justify-center gap-10">
              {licenses?.map((block) => (
                <div key={block.id} className="w-full flex flex-col">
                  <p className="mt-2">{block.description}</p>
                  {block.image1_url && (
                    <ImageModal src={block.image1_url}>
                      <div className="w-full flex justify-center mt-4">
                        <img
                          src={block.image1_url}
                          alt=""
                          className="rounded-xl object-contain max-w-[500px] w-full"
                        />
                      </div>
                    </ImageModal>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          <section className="w-11/12 mx-auto pt-20">
            <motion.h1
              initial={{ y: "-20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="text-4xl text-center mb-20"
            >
              {t("projects.title")}
            </motion.h1>
            <div className="flex flex-col md:flex-row justify-between gap-5">
              {projects?.map((project) => (
                <div
                  key={project.id}
                  className="text-center flex flex-col gap-5"
                >
                  <motion.p
                    initial={{ y: "-20%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="text-2xl"
                  >
                    {project.title}
                  </motion.p>
                  <motion.p
                    initial={{ y: "-20%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  >
                    {project.description}
                  </motion.p>
                  {project.image1_url && (
                    <ImageModal src={project.image1_url}>
                      <motion.img
                        initial={{ y: "-20%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                        src={project.image1_url}
                        alt=""
                        className="h-[528px] object-cover rounded-2xl"
                      />
                    </ImageModal>
                  )}
                </div>
              ))}
            </div>
          </section>

          {team && (
            <motion.section
              initial={{ y: "-20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="w-11/12 mx-auto pt-10"
            >
              <h1 className="text-4xl">{team.title}</h1>
              <p className="mt-2">{team.description}</p>
              <div className="h-[450px] mt-10 relative">
                <div className="w-full absolute left-0 h-[400px] md:h-auto">
                  <GSliderWithModal
                    images={team.gallery_images
                      .map((img) => img.image_url)
                      .filter((url): url is string => url !== null)}
                  />
                </div>
              </div>
            </motion.section>
          )}

          {technicalBase && (
            <section className="w-11/12 mx-auto pt-10">
              <motion.h1
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="text-4xl"
              >
                {technicalBase.title}
              </motion.h1>
              <motion.p
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="mt-2"
              >
                {technicalBase.description}
              </motion.p>
              <div className="h-[450px] mt-10 relative">
                <div className="w-full absolute left-0">
                  <GSliderWithModal images={galleryImages} />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default BayTash;
