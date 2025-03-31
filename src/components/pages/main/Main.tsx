import Banner from "../../organims/banner/Banner";
import Statistics from "../../organims/statistics/Statistics";
import Projects from "../../organims/projects/Projects";
import About from "../../organims/about/About";
import Video from "../../organims/video/Video";
import Office from "../../organims/office/Office";

const Main = () => {
  return (
    <>
      <div className="w-full bg-[#141414]">
        <Banner />
        <Statistics />
        <Projects />
        <About />
        <Video />
        <Office />
      </div>
    </>
  );
};

export default Main;
