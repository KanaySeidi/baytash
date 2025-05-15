import { useTranslation } from "react-i18next";
import stoodin from "../../../assets/images/stoodin.webp";

const Stoodin = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0">
        <img src={stoodin} alt="" className="w-full" />
      </div>
      <div className="w-full h-screen relative flex justify-center items-center mb-20 z-20">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-[#AE9152] to-[#513E15] bg-clip-text text-transparent uppercase mt-32 stoodin p-2">
          {t("stoodin")}
        </h1>
      </div>
    </>
  );
};

export default Stoodin;
