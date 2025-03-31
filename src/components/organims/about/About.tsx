import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";
import about3 from "../../../assets/images/about3.png";

const About = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="w-11/12 mx-auto text-white">
          <h1 className="text-2xl uppercase mb-5">О нас</h1>
          <p className="text-7xl font-bold bg-gradient-to-r from-[#AE9152] to-[#513E15] bg-clip-text text-transparent">
            BAY TASH — ваш доверенный партнер на рынке недвижимости
          </p>
          <div className="w-full flex gap-10 mt-10">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex w-full h-56 bg-black mt-10 mb-20">
          <div className="relative w-1/2 h-full">
            <img
              src={about1}
              alt="Безопасность"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
            <div className="absolute top-0 left-[-10%] w-40 h-full bg-[#252525] -skew-x-[20deg]"></div>
            <div>
              <h2 className="text-6xl">Безопасность</h2>
              <p className="text-sm mt-2">24/7 охраняемая территория.</p>
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-56 bg-black mt-10 mb-20">
          <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
            <div className="absolute top-0 left-[90%] w-40 h-full bg-[#252525] skew-x-[20deg] z-10"></div>
            <div className="text-end">
              <h2 className="text-6xl">Парковка</h2>
              <p className="text-sm mt-2">
                Большое количество мест на подземной парковке.
              </p>
            </div>
          </div>
          <div className="relative w-1/2 h-full">
            <img
              src={about2}
              alt="Безопасность"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
        <div className="relative flex w-full h-56 bg-black mt-10 mb-20">
          <div className="relative w-1/2 h-full">
            <img
              src={about3}
              alt="Безопасность"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="w-3/4 flex items-center justify-center bg-[#252525] text-white relative">
            <div className="absolute top-0 left-[-10%] w-40 h-full bg-[#252525] -skew-x-[20deg]"></div>
            <div>
              <h2 className="text-6xl">Гарантия</h2>
              <p className="text-sm mt-2">
                100% Гарантия сдачи в эксплуатацию точно в срок
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
