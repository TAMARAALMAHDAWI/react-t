import React from "react";
import { motion } from "framer-motion";
import './vission.css'; 

const Vision = () => {
  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Vision «-»
      </motion.h1>

      <motion.p
        className="text"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        The vision of PNPS is to prepare students to compete at the high level and to inspire them to be leaders now and for the future by providing the best environment to achieve their academic, athletic and personal aspiration.
      </motion.p>

      <motion.p
        className="text"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
      >
        Hence PNPS is here to shape your Childs future, 'To Inspire, To achieve'
      </motion.p>
    </div>
  );
};

export default Vision;
