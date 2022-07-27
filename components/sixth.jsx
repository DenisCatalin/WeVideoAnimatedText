import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const SixthText = () => {
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
            animate={{ opacity: [0, 1], y: [200, 0] }}
          >
            W
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [200, 0] }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-200, 0] }}
          >
            V
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-200, 0] }}
          >
            i
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-200, 0] }}
          >
            d
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-200, 0] }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0, 1], y: [-200, 0] }}
          >
            o
          </motion.h1>
        </>
      )}
    </motion.div>
  );
};

export default SixthText;
