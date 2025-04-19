import { useTranslation } from "react-i18next";
import btg from "../../../assets/images/btg.png";
import btg1 from "../../../assets/images/btg1.png";
import bLogo from "../../../assets/icon/bLogo.svg";
import statis from "../../../assets/images/statis3.png";
import licence1 from "../../../assets/images/license1.png";
import licence2 from "../../../assets/images/license2.png";
import career1 from "../../../assets/images/career1.png";
import career2 from "../../../assets/images/career2.png";
import project2 from "../../../assets/images/projects2.png";
import project3 from "../../../assets/images/projects3.png";
import GSlider from "../../organims/gslider/GSlider";
import kgch from "../../../assets/images/kgch.png";

const BayTash = () => {
  const { t } = useTranslation();
  const images = [career1, career2, career1, career2, career1, career2];

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[250px] md:h-[450px] lg:h-[886px] -z-10">
        <img src={btg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 h-[250px] md:h-[450px] lg:h-[886px] flex flex-col justify-end lg:justify-center items-start w-11/12 mx-auto text-white">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-8xl">
          {t("company.title")}
        </h1>
        <p className="w-full lg:w-1/3 mt-5 pb-10 lg:pb-0 text-xs sm-text-sm md:text-md lg:text-base">
          {t("company.subtitle")}
        </p>
      </div>
      <div className="w-full  bg-black text-white">
        <img src={kgch} alt="" className="w-full" />
        <section className="w-11/12 mx-auto pt-20">
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20">
            <div className="w-full lg:w-2/5 md:h-[300px] lg:h-full  hidden md:block">
              <img src={btg1} alt="" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <img src={bLogo} alt="" />
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl mb-10">
                {t("company.slogan")}
              </h1>
              <p>{t("company.description")}</p>
            </div>
          </div>
        </section>

        <section className="w-11/12 mx-auto bg-black pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-2">
            <p className="w-full md:w-1/2 text-2xl font-thin ">
              {t("company.mission", { returnObjects: false })}
            </p>
            <img src={statis} alt="" className="rounded-2xl w-full md:w-1/2" />
          </div>
          <div className="mt-5">
            <h1 className="text-4xl">{t("licenses.title")}</h1>
            <div className="w-full flex flex-col md:flex-row justify-between gap-5 mt-10">
              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p>{t("licenses.desc1")}</p>
                <p>{t("licenses.desc2")}</p>
                <p>{t("licenses.desc3")}</p>
                <p>{t("licenses.desc4")}</p>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p>{t("licenses.desc5")}</p>
                <p>{t("licenses.desc6")}</p>
                <p>{t("licenses.desc7")}</p>
                <p>{t("licenses.desc8")}</p>
                <p>{t("licenses.desc9")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-10 mt-10">
            <img src={licence1} alt="" className="w-1/2" />
            <img src={licence2} alt="" className="w-1/2" />
          </div>
        </section>

        <section className="w-11/12 mx-auto bg-black pt-10">
          <h1 className="text-4xl text-center mb-20">{t("projects.title")}</h1>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="text-center flex flex-col gap-5">
              <p className="text-2xl">{t("projects.towerTitle")}</p>
              <p>{t("projects.towerDesc")}</p>
              <div className="">
                <img src={project2} alt="" className="h-[528px]" />
              </div>
            </div>
            <div className="text-center flex flex-col gap-5">
              <p className="text-2xl">{t("projects.eliteTitle")}</p>
              <p>{t("projects.eliteDesc")}</p>
              <div>
                <img
                  src={project3}
                  alt=""
                  className="h-[528px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto pt-10">
          <div className="w-full md:w-3/4 flex flex-col gap-5">
            <h1 className="text-4xl">{t("team.title")}</h1>
            <p>{t("team.desc1")}</p>
            <p>{t("team.desc2")}</p>
          </div>
          <div className="h-[450px] mt-10">
            <div className="w-full absolute left-0">
              <GSlider images={images} />
            </div>
          </div>
        </section>
        <section className="w-11/12 mx-auto pt-10">
          <div className="w-full md:w-3/4 flex flex-col gap-5">
            <h1 className="text-4xl">{t("tech.title")}</h1>
            <p>{t("tech.desc")}</p>
          </div>
          <div className="h-[450px] mt-10">
            <div className="w-full absolute left-0">
              <GSlider images={images} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BayTash;
