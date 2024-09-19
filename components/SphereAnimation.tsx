'use client'

import React from 'react';
import { motion } from 'framer-motion';

const SphereAnimation = () => {
  return (
    <motion.div
      className="sphere"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <div className="sphere-inner"></div>
    </motion.div>
  );
};

export default SphereAnimation;