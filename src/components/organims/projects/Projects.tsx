import projects1 from "../../../assets/images/projects1.png";
import projects2 from "../../../assets/images/projects2.png";
import projects3 from "../../../assets/images/projects3.png";

const Projects = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl text-center text-white mb-10">
            Наши объекты
          </h1>
          <div className="flex flex-col gap-10">
            <div className="w-full border-20 border-[#252525] rounded-lg text-white ">
              <img src={projects1} alt="Здание" className="w-full rounded-lg" />
              <div className="w-11/12 mx-auto relative rounded-lg">
                <div className="absolute bottom-5 h-52 flex flex-col gap-10">
                  <p className="text-4xl font-medium">ЖК «BAY TASH TOWER» </p>
                  <div className="w-full h-px bg-gray-500 rounded-lg mb-5"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full border-20 border-[#252525] rounded-lg text-white ">
              <img src={projects2} alt="Здание" className="w-full rounded-lg" />
              <div className="w-11/12 mx-auto relative rounded-lg">
                <div className="absolute bottom-5 h-52 flex flex-col gap-10">
                  <p className="text-4xl font-medium">ЖК «BAY TASH TOWER»</p>
                  <div className="w-full h-px bg-gray-500 rounded-lg mb-5"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full border-20 border-[#252525] rounded-lg text-white ">
              <img src={projects3} alt="Здание" className="w-full rounded-lg" />
              <div className="w-11/12 mx-auto relative rounded-lg">
                <div className="absolute bottom-5 h-52 flex flex-col gap-10">
                  <p className="text-4xl font-medium">ЖК «ELITE RESIDENCE»</p>
                  <div className="w-full h-px bg-gray-500 rounded-lg mb-5"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
