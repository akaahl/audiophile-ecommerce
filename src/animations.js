import { useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("animate");
    console.log(true);
  }
  return [element, controls];
};

export const navVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
    },
  },
};

export const heroVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.6,
      type: "spring",
    },
  },
};

export const leftSlide = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

export const rightSlide = {
  initial: {
    opacity: 0,
    x: 500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

export const scaleIn = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};

export const mobileNavVariants = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
