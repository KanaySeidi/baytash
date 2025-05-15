import { motion } from "framer-motion";

interface AnimatedArrowsProps {
  targetId: string;
}

export const AnimatedArrows = ({ targetId }: AnimatedArrowsProps) => {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const Arrow = ({ delay }: { delay: number }) => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
      fill="none"
      stroke="#EAA000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down w-[140px] h-[50px] cursor-pointer -mt-4"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1, 0], y: [0, 10, 20] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <path d="M6 9L12 15L18 9" />
    </motion.svg>
  );

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
      onClick={handleScroll}
    >
      <Arrow delay={0} />
      <Arrow delay={0.4} />
      <Arrow delay={0.8} />
    </div>
  );
};
