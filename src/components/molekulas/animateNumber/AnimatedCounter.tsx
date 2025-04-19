import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from.toLocaleString("ru-RU"));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setDisplay(Math.floor(latest).toLocaleString("ru-RU"));
        },
      });

      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
