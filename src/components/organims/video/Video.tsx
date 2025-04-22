import { useEffect } from "react";
import { useHomeStore } from "../../../api/homeStore/homeStore";

const Video = () => {
  const { data, fetchHomeData } = useHomeStore();

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <>
      <div className="w-full h-full mt-20">
        {data?.videos.map((item) => (
          <video
            className="w-full h-[320px] md:h-[650px] object-cover"
            controls
          >
            <source src={item.video_file} type="video/mp4" />
          </video>
        ))}
      </div>
    </>
  );
};

export default Video;
