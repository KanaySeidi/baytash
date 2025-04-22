import { useTranslation } from "react-i18next";
import lines from "../../../assets/images/LINES.svg";
import projectBuild from "../../../assets/images/project.jpg";
import buildLogo from "../../../assets/icon/zdanie.svg";
import GSlider from "../../organims/gslider/GSlider";
import locat from "../../../assets/images/locat.png";
import { useEffect, useState } from "react";
import { useComplexeStore } from "../../../api/complexStore/complexStore";

const Tower = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const { data, fetchComplexes, loading, error } = useComplexeStore();

  useEffect(() => {
    fetchComplexes();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!data) return null;

  const prjFeat = [
    {
      id: 1,
      description: t("city.projectFeat.1"),
      img: buildLogo,
    },
    {
      id: 2,
      description: t("city.projectFeat.2"),
      img: buildLogo,
    },
    {
      id: 3,
      description: t("city.projectFeat.3"),
      img: buildLogo,
    },
  ];

  return (
    <div className="w-full h-full bg-white pt-20 relative">
      <div className="absolute w-full h-[520px] md:h-[700px] lg:h-[900px] top-0 left-0">
        <img
          src={data.main_image_url}
          alt={t("city.alt")}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-11/12 h-[370px] md:h-[550px] lg:h-[780px] mx-auto">
        <div className="w-full h-full flex flex-col justify-end items-start gap-5 md:gap-8">
          <h1 className="text-white text-lg md:text-4xl lg:text-8xl font-bold">
            {data.name}
          </h1>
          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-10 text-[#EAA000] text-xs md:text-base font-medium list-disc ml-2 md:ml-0 lg:mt-20">
            <li>
              {data.apartments_count} {t("city.info.0")}
            </li>
            <li>
              {data.floors_count}
              {t("city.info.1")}
            </li>
            <li>
              {data.entrances_count}
              {t("city.info.2")}
            </li>
            <li>
              {data.parking_count}
              {t("city.info.3")}
            </li>
          </ul>
          <p className="w-full lg:w-1/2 text-white text-xs md:text-base">
            {data.short_description}
          </p>
          <button className="w-auto px-4 py-2 text-xs md:text-base text-white bg-[#EAA000] rounded-lg">
            {t("city.viewPlan")}
          </button>
        </div>
      </div>

      <div className="absolute bg-[#141414] w-full h-[2100px] md:h-[2000px] lg:h-[1000px] rounded-b-4xl">
        <img src={lines} alt="" className="relative pt-40" />
      </div>

      <div className="relative w-11/12 h-[2100px] md:h-[2000px] lg:h-[1000px] mx-auto mt-10">
        <div className="flex items-center gap-5 md:gap-10">
          <h1 className="text-white text-xl sm:text-4xl md:text-7xl">
            {t("city.aboutTitle")}
          </h1>
          <p className="text-white text-xs sm:text-base md:text-md w-full md:w-1/3">
            {t("city.aboutSub")}
          </p>
        </div>

        <div className="w-full h-px bg-gray-200 rounded-4xl my-10"></div>

        <div className="flex flex-col lg:flex-row gap-10">
          <img src={projectBuild} alt="" className="rounded-4xl shadow-2xl" />
          <div className="text-white flex flex-col justify-between">
            <p className="text-2xl lg:text-xl">{t("city.aboutIntro")}</p>
            {data.advantages.map((item) => (
              <div key={item.id} className="flex gap-5 items-center">
                <img src={buildLogo} alt="" />
                <p className="text-white/70 text-justify py-2 md:py-0">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="flex flex-col text-white w-full lg:w-1/2 justify-between pb-5 md:pb-20 gap-5 lg:gap-0">
            <p className="text-2xl lg:text-base">{t("city.advantagesTitle")}</p>
            {prjFeat.map((item) => (
              <div className="flex gap-5" key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.description}</p>
              </div>
            ))}
            <p className="text-justify">{t("city.finalMessage")}</p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row w-full gap-10">
              <div className="flex flex-col justify-center items-start pl-10 gap-2 w-full h-40 bg-[#EAA000] rounded-4xl">
                <h1 className="text-6xl">{t("city.areaSize.value")}</h1>
                <p>{t("city.areaSize.label")}</p>
              </div>
              <div className="flex flex-col justify-center items-start pl-10 gap-2 w-full h-40 border-2 border-[#EAA000] text-[#EAA000] rounded-4xl">
                <h1 className="text-6xl">630</h1>
                <p>{t("city.apartments")}</p>
              </div>
            </div>
            <div className="w-full h-40 flex flex-col justify-center items-start pl-10 bg-[#EAA000] rounded-4xl">
              <h1 className="text-5xl md:text-6xl">7700 кв.м</h1>
              <p className="text-xs md:text-base mt-4 md:mt-0">
                {t("city.commercialArea")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-20 h-[650px]">
        <div className="flex gap-10 items-center">
          <h1 className="text-4xl md:text-7xl">{t("city.galleryTitle")}</h1>
          <p className="w-full md:w-1/3 text-sm sm:text-md md:text-base">
            {t("city.gallerySub")}
          </p>
        </div>
        <div className="w-full mt-20">
          <div className="w-full h-[400px] md:h-auto absolute left-0">
            <GSlider images={data.gallery.map((img) => img.image_url)} />
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mb-10">
        <h1 className="uppercase text-center text-4xl">
          {t("city.plansTitle")}
        </h1>
        <div className="w-full h-px rounded-4xl bg-gray-300 mt-4 mb-2 md:mb-10"></div>
        <div className="w-full flex flex-col md:flex-row  gap-4">
          {data.floor_plans.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-[48%] lg:w-[32%] flex flex-col justify-between text-center gap-4"
            >
              <div className="bg-[#F0F0F0] w-full h-[350px] sm:h-[400px] md:h-[380px] lg:h-[400px] xl:h-[440px] rounded-4xl flex justify-center items-center overflow-hidden">
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
                    className="relative bg-white p-5 rounded-4xl shadow-lg flex justify-center items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedImg}
                      alt="Планировка"
                      className="w-full h-auto max-w-2xl rounded-4xl"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="w-11/12 mx-auto">
          <div className="w-full h-auto rounded-4xl mb-5 md:my-20 ">
            <img src={locat} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="w-full h-[1200px] md:h-[1000px] bg-[#252525] rounded-t-4xl">
        <div className="w-11/12 mx-auto text-white py-20">
          <h1 className="text-4xl uppercase font-semibold mb-4">
            {t("city.videoTitle")}
          </h1>
          <div className="w-full h-px rounded-4xl bg-gray-300 mb-14"></div>
          {data.videos.map((item) => (
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-10 w-full md:w-1/2">
                <p className="text-2xl">{item.title}</p>
              </div>
              <video
                className="w-full md:w-1/2 h-[320px] object-cover rounded-4xl"
                controls
              >
                <source src={item.video_url} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <div className="w-11/12 mx-auto">
          <p className="text-xl md:text-5xl text-white text-center uppercase">
            {t("city.feedback")}
          </p>
          <p className="text-sm md:text-lg text-white text-center mt-5">
            {t("city.callToAction")}
          </p>
          <div className="w-full h-px rounded-4xl mt-5 mb-5 md:mb-20 bg-gray-300"></div>
          <div className="flex justify-between gap-5 h-14 my-10 font-semibold text-xs md:text-base">
            <div className="border border-[#EAA000] text-[#EAA000] w-full flex justify-center items-center rounded-4xl">
              <p>0312 903 333</p>
            </div>
            <div className="w-full flex justify-center items-center bg-[#EAA000] text-black rounded-4xl">
              <p>0312 903 333</p>
            </div>
            <div className="border border-[#EAA000] text-[#EAA000] w-full flex justify-center items-center rounded-4xl">
              <p>0312 903 333</p>
            </div>
          </div>
          <div className="w-full rounded-4xl bg-[#EAA000] flex justify-center items-center h-10 md:h-14 text-xs md:text-lg font-semibold">
            <p>{t("city.viewPlan")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tower;
