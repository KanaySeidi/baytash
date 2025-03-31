import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gItem1 from "../../../assets/images/gItem1.jpg";
import gItem2 from "../../../assets/images/item1.jpg";
import gItem3 from "../../../assets/images/item3.jpg";
import gItem4 from "../../../assets/images/items2.jpg";

export default function GSlider() {
  const imgArr = [gItem1, gItem2, gItem3, gItem4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "40px",
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {imgArr.map((item, index) => (
        <div key={index}>
          <img
            src={item}
            alt=""
            className="w-[700px] h-[408px] object-cover rounded-4xl outline-none focus:outline-none"
          />
        </div>
      ))}
    </Slider>
  );
}
