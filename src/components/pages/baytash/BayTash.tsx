import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import GSlider from "../../organims/gslider/GSlider";
import { useBaytashStore } from "../../../api/baytashStore/baytashStore";
import kgch from "../../../assets/images/kgch.png";
import btg1 from "../../../assets/images/btg1.png";
import bLogo from "../../../assets/icon/bLogo.svg";

const BayTash = () => {
  const { t } = useTranslation();
  const { data, fetchBaytash } = useBaytashStore();

  useEffect(() => {
    fetchBaytash();
  }, []);

  const buildingReliable = data?.blocks.find(
    (b) => b.block_type === "BUILDING RELIABLE"
  );

  const technicalBase = data?.blocks.find(
    (b) => b.block_type === "TECHNICAL BASE"
  );
  const licenses = data?.blocks.filter((b) =>
    b.block_type.includes("LICENSES")
  );
  const projects = data?.blocks.filter(
    (b) => b.block_type === "CONTRACTOR WORKS"
  );
  const team = data?.blocks.find((b) => b.block_type === "OUR SPECIALISTS");

  const galleryImages =
    technicalBase?.gallery_images.map((g) => g.image_url) || [];

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[250px] md:h-[450px] lg:h-[886px] -z-10">
        <img
          src={data?.main_image_url || ""}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 h-[250px] md:h-[450px] lg:h-[886px] flex flex-col justify-end lg:justify-center items-start w-11/12 mx-auto text-white">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-8xl">
          {data?.title}
        </h1>
        <p className="w-full lg:w-1/3 mt-5 pb-10 lg:pb-0 text-xs sm:text-sm md:text-md lg:text-base">
          {data?.description}
        </p>
      </div>
      <div className="w-full  bg-black text-white">
        <img src={kgch} alt="" className="w-full" />
        <section className="w-11/12 mx-auto pt-20">
          <section className="w-11/12 mx-auto pt-20">
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20">
              <div className="w-full lg:w-2/5 md:h-[300px] lg:h-full  hidden md:block">
                <img src={btg1} alt="" className="w-full" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-around">
                <img src={bLogo} alt="" width={400} />
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl mb-10">
                  {t("company.slogan")}
                </h1>
                <p>{t("company.description")}</p>
              </div>
            </div>
          </section>
        </section>
        {buildingReliable && (
          <section className="w-11/12 mx-auto bg-black pt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
              <p className="w-full md:w-1/2 text-2xl font-thin ">
                {buildingReliable.title}
              </p>
              <img
                src={buildingReliable.image1_url || undefined}
                alt=""
                className="rounded-2xl w-full md:w-1/2"
              />
            </div>
          </section>
        )}
        <div className="w-full bg-black text-white">
          <section className="w-11/12 mx-auto pt-20">
            <h1 className="text-4xl">{t("licenses.title")}</h1>
            <div className="mt-10 flex w-full justify-center gap-10">
              {licenses?.map((block) => (
                <div key={block.id} className="flex flex-col items-center">
                  <p className="mt-2">{block.description}</p>
                  {block.image1_url && (
                    <img
                      src={block.image1_url}
                      alt=""
                      className="mt-4 rounded-xl w-full md:w-1/2"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="w-11/12 mx-auto pt-20">
            <h1 className="text-4xl text-center mb-20">
              {t("projects.title")}
            </h1>
            <div className="flex flex-col md:flex-row justify-between gap-5">
              {projects?.map((project) => (
                <div
                  key={project.id}
                  className="text-center flex flex-col gap-5"
                >
                  <p className="text-2xl">{project.title}</p>
                  <p>{project.description}</p>
                  {project.image1_url && (
                    <img
                      src={project.image1_url}
                      alt=""
                      className="h-[528px] object-cover rounded-2xl"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>

          {team && (
            <section className="w-11/12 mx-auto pt-10">
              <h1 className="text-4xl">{team.title}</h1>
              <p className="mt-2">{team.description}</p>
              <div className="h-[450px] mt-10">
                <div className="w-full absolute left-0">
                  <GSlider
                    images={team.gallery_images.map((img) => img.image_url)}
                  />
                </div>
              </div>
            </section>
          )}

          {technicalBase && (
            <section className="w-11/12 mx-auto pt-10">
              <h1 className="text-4xl">{technicalBase.title}</h1>
              <p className="mt-2">{technicalBase.description}</p>
              <div className="h-[450px] mt-10">
                <div className="w-full absolute left-0">
                  <GSlider images={galleryImages} />
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
