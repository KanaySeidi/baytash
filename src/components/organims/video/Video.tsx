import video from "../../../assets/video/video.mp4";

const Video = () => {
  return (
    <>
      <div className="w-full h-full mt-20">
        <video className="w-full h-[320px] md:h-[650px] object-cover" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
