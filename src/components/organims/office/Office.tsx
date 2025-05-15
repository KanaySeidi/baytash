import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Office = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full mt-20 pb-20">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row gap-10 w-full items-center">
            <div className="w-full md:w-2/3 flex flex-col text-white/30">
              <div>
                <p className="text-lg md:text-3xl lg:text-6xl text-white mb-5">
                  {t("office.officeLoc")}
                </p>
                <p className="">{t("office.officeCity")}</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-10 gap-2 md:gap-0">
                <div>
                  <p className="text-white mt-2"> {t("office.workTime")}</p>
                  <p> {t("office.office")}</p>
                  <p> {t("office.wt")}</p>
                  <p> {t("office.wt2")}</p>
                </div>
                <div>
                  <p className="text-white">{t("office.contact")}</p>
                  <div className="flex flex-col gap-2 cursor-pointer mt-2">
                    <motion.div
                      onClick={() => window.open("https://wa.me/+996505903333")}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className="origin-left"
                    >
                      <p>+996 505 903 333</p>
                    </motion.div>
                    <motion.div
                      onClick={() => window.open("https://wa.me/+996772903333")}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className="origin-left"
                    >
                      <p>+996 772 903 333</p>
                    </motion.div>
                    <motion.div
                      onClick={() => window.open("https://wa.me/+996552903333")}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className="origin-left"
                    >
                      <p>+996 552 903 333</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 w-full items-center">
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=74.609899%2C42.874245&mode=whatshere&whatshere%5Bpoint%5D=74.609604%2C42.874210&whatshere%5Bzoom%5D=17&z=17.06"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Office;
