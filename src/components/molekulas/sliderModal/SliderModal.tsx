import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SliderModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const SliderModal = ({ images, initialIndex, onClose }: SliderModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div
          className="relative max-w-3xl w-full p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Modal Slide ${currentIndex + 1}`}
            className="w-full h-[80vh] object-contain rounded-xl"
          />
          <button
            onClick={prev}
            className="absolute left-2 md:-left-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 p-2 rounded-full z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left-icon lucide-chevron-left cursor-pointer z-50"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-60 p-2 rounded-full z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right-icon lucide-chevron-right cursor-pointer z-50"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SliderModal;
