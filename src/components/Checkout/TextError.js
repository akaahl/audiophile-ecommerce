import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNavVariants } from "../../animations";

function TextError(props) {
  return (
    <AnimatePresence>
      <motion.small
        className="error-message"
        variants={mobileNavVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {props.children}
      </motion.small>
    </AnimatePresence>
  );
}

export default TextError;
