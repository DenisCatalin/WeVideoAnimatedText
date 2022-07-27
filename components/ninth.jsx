import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const NinthText = () => {
  const [render, setRender] = useState(true);
  return (
    <motion.div
      className={styles.textContainer}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      onClick={() => setRender(!render)}
    >
      {render ? (
        <h1 className={styles.text}>Click</h1>
      ) : (
        <>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-100, 0], x: [-50, 0] }}
            transition={{ duration: 2 }}
          >
            W
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [100, 0], x: [50, 0] }}
            transition={{ duration: 2 }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-10, 0], x: [-70, 0] }}
            transition={{ duration: 2 }}
          >
            V
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-80, 0], x: [-20, 0] }}
            transition={{ duration: 2 }}
          >
            i
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-150, 0], x: [90, 0] }}
            transition={{ duration: 2 }}
          >
            d
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [40, 0], x: [150, 0] }}
            transition={{ duration: 2 }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [120, 0], x: [-35, 0] }}
            transition={{ duration: 2 }}
          >
            o
          </motion.h1>
        </>
      )}
    </motion.div>
  );
};

export default NinthText;
