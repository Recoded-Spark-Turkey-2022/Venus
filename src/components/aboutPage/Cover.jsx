import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../../assets/aboutUs.png';

function Cover() {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, ease: 'linear' }}
      viewport={{ once: false, amount: 0.1 }}
      className="flex justify-center"
    >
      <img src={AboutUs} alt="/" className="w-full h-1/2" />
    </motion.div>
  );
}

export default Cover;
