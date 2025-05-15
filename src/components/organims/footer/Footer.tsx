import vector from "../../../assets/icon/fLogo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContactStore } from "../../../api/contactStore/contactStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { data, fetchContacts } = useContactStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchContacts();
  }, []);

  const navs = [
    {
      id: 1,
      title: t("header.main"),
      path: "/",
    },
    {
      id: 2,
      title: `${t("header.jk")} “Bay Tash City”`,
      path: "/complexe/1",
    },
    {
      id: 3,
      title: `${t("header.jk")} “Bay Tash Tower”`,
      path: "/complexe/2",
    },
    {
      id: 4,
      title: `${t("header.jk")} “Elite Residence”`,
      path: "/complexe/3",
    },
    {
      id: 5,
      title: `${t("header.jk")} "Bay Tash 111 Tower"`,
      path: "/stoodin",
    },
    {
      id: 6,
      title: "Бай Таш Групп",
      path: "/baytashgroup",
    },
  ];

  return (
    <>
      <div className="w-full  bg-[#141414]">
        <div className="w-full bg-[#252525] rounded-t-2xl pb-20">
          <div className="w-11/12 mx-auto pt-20 flex flex-col md:flex-row justify-between items-start gap-10 text-white">
            <div className="flex flex-col w-full md:w-1/2 gap-8 md:gap-10 h-full justify-between">
              <img src={vector} alt="лого" className="w-40" />
              <div className="flex flex-wrap gap-4 md:gap-2 ">
                {data?.social_links.map((item) => (
                  <div
                    className="cursor-pointer w-8 md:w-14 lg:w-16"
                    key={item.id}
                    onClick={() => item.url && window.open(item.url, "_blank")}
                  >
                    <motion.img
                      src={item.icon_url}
                      alt={item.name}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 cursor-pointer">
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
            <div className="w-full md:w-1/3 md:ml-20 text-lg h-full flex flex-col gap-5">
              <p className="text-2xl text-white/30">{t("footer.pages")}</p>
              <ul className="flex flex-col gap-2">
                {navs.map((nav) => (
                  <Link to={nav.path} key={nav.id}>
                    <motion.li
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {nav.title}
                    </motion.li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-lg h-full flex flex-col gap-5">
              <p className="text-2xl text-white/30">{t("footer.info")}</p>
              <ul className="flex flex-col gap-2">
                <Link to="/news">
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {t("header.news")}
                  </motion.li>
                </Link>
                <Link to="/vacancy">
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    {t("header.vacancy")}
                  </motion.li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
