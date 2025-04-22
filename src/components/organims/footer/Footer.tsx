import vector from "../../../assets/icon/fLogo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContactStore } from "../../../api/contactStore/contactStore";
import { useEffect } from "react";

const Footer = () => {
  const { data, fetchContacts } = useContactStore();

  useEffect(() => {
    fetchContacts();
  }, []);

  console.log(data);

  const navs = [
    {
      id: 1,
      title: "Главаня",
      path: "/",
    },
    {
      id: 1,
      title: "ЖК “Bay Tash City”",
      path: "/city",
    },
    {
      id: 1,
      title: "Здание “Bay Tash Tower” ",
      path: "/tower",
    },
    {
      id: 1,
      title: "ЖК “Elite Residence” ",
      path: "/residence",
    },
    {
      id: 1,
      title: "Бай Таш Групп",
      path: "/baytashgroup",
    },
  ];

  return (
    <>
      <div className="w-full  bg-[#141414]">
        <div className="w-full bg-[#252525] rounded-t-2xl pb-20">
          <div className="w-11/12 mx-auto pt-20 flex flex-col md:flex-row justify-between items-start gap-10 text-white">
            <div className="flex flex-col w-full md:w-1/2 gap-8 md:gap-20 h-full justify-between">
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
            </div>
            <div className="w-full md:w-1/3 md:ml-20 text-lg h-full flex flex-col gap-5">
              <p className="text-2xl text-white/30">Страницы</p>
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
              <p className="text-2xl text-white/30">Полезная инфорация</p>
              <ul className="flex flex-col gap-2">
                <Link to="/news">
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    Новости
                  </motion.li>
                </Link>
                <Link to="/vacancy">
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    Вакансии
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
