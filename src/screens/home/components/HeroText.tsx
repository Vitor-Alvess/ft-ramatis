"use client";

import { motion } from "framer-motion";

export const HeroText = (): React.JSX.Element => {
  return (
    <motion.h1
      className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Welcome to{" "}
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        React Template
      </span>
    </motion.h1>
  );
};