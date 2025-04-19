import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GSliderProps {
  images: string[];
}

export default function GSlider({ images }: GSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((item, index) => (
        <div key={index} className="px-2">
          <img
            src={item}
            alt={`Slide ${index + 1}`}
            className="w-[700px] h-[408px] object-cover rounded-4xl outline-none focus:outline-none"
          />
        </div>
      ))}
    </Slider>
  );
}
