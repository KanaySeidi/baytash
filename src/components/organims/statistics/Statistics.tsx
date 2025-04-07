import { useTranslation } from "react-i18next";
import statis1 from "../../../assets/images/statis1.png";
import statis2 from "../../../assets/images/statis2.png";
import statis3 from "../../../assets/images/statis3.png";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full mt-20">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center text-white items-start gap-5">
            <img
              src={statis1}
              alt="здание"
              className="h-auto hidden md:block"
            />
            <img src={statis2} alt="здание" className="hidden md:block" />
            <div className="flex flex-col gap-5">
              <p className="uppercase text-lg md:text-5xl">
                <p className="text-white text-center">
                  {t("stats.part1")}{" "}
                  <span className="text-[#947A41]">
                    {t("stats.highlight1")}
                  </span>{" "}
                  {t("stats.middle")}{" "}
                  <span className="text-[#947A41]">
                    {t("stats.highlight2")}
                  </span>{" "}
                  {t("stats.part2")}
                </p>
              </p>
              <p className="text-justify mt-5">{t("stats.paragraph1")}</p>
              <p className="text-justify">{t("stats.paragraph2")}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-2 text-white mt-20">
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-6xl md:text-4xl lg:text-7xl text-[#EAA000]">
                #1
              </p>
              <p className="text-sm text-[#EAA000]">{t("stats.text1")}</p>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-6xl md:text-4xl lg:text-7xl">15</p>
              <p className="text-sm"> {t("stats.text2")}</p>
            </div>
            <div className="flex flex-col gap-2 flex-wrap">
              <p className="text-6xl md:text-4xl lg:text-7xl">3500 +</p>
              <p className="text-sm">{t("stats.text3")}</p>
            </div>
            <img
              src={statis3}
              alt="здание"
              className="block md:hidden lg:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
