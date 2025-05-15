import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-[#252525] h-screen flex items-center justify-center">
          <div className="flex flex-col items-center text-black font-bold font-sans rtl">
            <img
              src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
              alt="404"
              className="mb-5 mt-20 h-[342px]"
            />
            <span className="text-6xl font-extrabold mb-10 text-[#EAA000]">
              404
            </span>
            <p className="text-lg mb-3 text-[#EAA000]">{t("error.title")}</p>
            <p className="text-sm mb-6 text-[#EAA000]">{t("error.subtitle")}</p>
            <Link to="/">
              <motion.button
                className="bg-[#EAA000] text-white text-2xl font-extrabold py-2 px-6 rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                {t("error.btn")}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
