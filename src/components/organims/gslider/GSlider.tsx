import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import SliderModal from "../../molekulas/sliderModal/SliderModal";
import { motion } from "framer-motion";

interface GSliderProps {
  images: string[];
}

export default function GSliderWithModal({ images }: GSliderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <motion.div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-opacity-80 rounded-full p-2 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.8 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#252525"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-left-icon lucide-chevron-left bg-white  rounded-full"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </motion.div>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <motion.div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-opacity-80 rounded-full p-2 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.8 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#252525"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-right-icon lucide-chevron-right bg-white rounded-full"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </motion.div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, dots: false },
      },
      {
        breakpoint: 560,
        settings: { slidesToShow: 1, dots: false },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="px-2">
            <img
              src={item}
              alt={`Slide ${index + 1}`}
              className="w-[700px] h-[408px] object-cover rounded-4xl cursor-pointer"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <SliderModal
          images={images}
          initialIndex={selectedIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
