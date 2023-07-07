import React from "react";
import { motion } from "framer-motion";
const ButtonPrimary: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.button className="relative cursor-pointer px-[min(4vh,4vw)]  py-[min(.5vh,.5vw)] shadow-primary-sm">
      <span className="relative z-10 rounded-none text-base font-medium text-brand-primary max-[900px]:text-sm max-[600px]:text-xs">
        {text}
      </span>
    </motion.button>
  );
};

export default ButtonPrimary;
