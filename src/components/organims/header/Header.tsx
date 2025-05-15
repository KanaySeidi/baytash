import { useEffect, useState } from "react";
import vector from "../../../assets/icon/Vector.svg";
import icon from "../../../assets/icon/Icon.svg";
import burger from "../../../assets/icon/burger.svg";
import NavigationItem from "../../molekulas/navigationItem/NavigationItem";
import LanguageSwitcher from "../../molekulas/langSwitcher/LangSwitcher";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full  fixed top-0 left-0 z-50 ${
        isScroll
          ? "h-24 bg-[#1A1A1A] duration-1000"
          : "h-16 bg-[#252525] duration-1000"
      }`}
    >
      <div className="w-11/12 mx-auto h-full flex justify-between items-center">
        <div className="flex h-full items-center gap-1 md:gap-5 lg:gap-10">
          <img
            src={vector}
            alt="Logo"
            className="size-24 md:size-14 lg:size-24"
          />
          <div className="hidden md:flex">
            <NavigationItem isOpen={false} />
          </div>
        </div>
        <div className="flex h-full items-center gap-2 md:gap-4">
          <div className="flex h-full items-center gap-1">
            <img src={icon} alt="Lang Icon" />
            <LanguageSwitcher />
          </div>
          <div className="text-white md:text-xs lg:text-base hidden md:block">
            {isScroll ? (
              <div className="flex flex-col gap-2">
                <motion.p
                  key="multi"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
                >
                  +996 505 903 333
                </motion.p>
                <p>+996 552 903 333</p>
                <motion.p
                  key="multi"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1 }}
                >
                  +996 772 903 333
                </motion.p>
              </div>
            ) : (
              <p>+996 552 903 333</p>
            )}
          </div>
          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <img src={burger} alt="menu" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="absolute top-0 left-0 w-full h-screen bg-black text-white p-5 md:hidden flex flex-col justify-center items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-8 text-2xl"
          >
            Х
          </motion.button>
          <NavigationItem isOpen={true} onLinkClick={() => setIsOpen(false)} />
          <div className="flex flex-col items-center gap-2 mt-5 ">
            <p>+996 505 903 333</p>
            <p>+996 552 903 333</p>
            <p>+996 772 903 333</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
