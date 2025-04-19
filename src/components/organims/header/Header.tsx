import { useEffect, useState } from "react";
import vector from "../../../assets/icon/Vector.svg";
import icon from "../../../assets/icon/Icon.svg";
import burger from "../../../assets/icon/burger.svg";
import NavigationItem from "../../molekulas/navigationItem/NavigationItem";
import LanguageSwitcher from "../../molekulas/langSwitcher/LangSwitcher";

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
          ? "h-20 bg-[#1A1A1A] duration-1000"
          : "h-10 bg-transparent pt-4 duration-1000"
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
            <p>+996 552 90 33 33</p>
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
        <div className="absolute top-20 left-0 w-full bg-black text-white p-5 md:hidden flex flex-col gap-4">
          <NavigationItem isOpen={true} />
          <div className="flex flex-col items-center gap-2 mt-5 ">
            <p>+996 552 90 33 33</p>
            <p>+996 312 58 88 83</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
