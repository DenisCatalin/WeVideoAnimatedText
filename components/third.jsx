import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const ThirdText = () => {
  const [render, setRender] = useState(true);

  const left = {
    opacity: [0, 1],
    x: [-200, 0],
  };

  const right = {
    opacity: [0, 1],
    x: [200, 0],
  };
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
          <motion.h1 className={styles.text} animate={left}>
            W
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={right}
            transition={{ delay: 0.2 }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={left}
            transition={{ delay: 0.3 }}
          >
            V
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={right}
            transition={{ delay: 0.4 }}
          >
            i
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={left}
            transition={{ delay: 0.5 }}
          >
            d
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={right}
            transition={{ delay: 0.6 }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={left}
            transition={{ delay: 0.7 }}
          >
            o
          </motion.h1>
          <h1 className={styles.text}></h1>
        </>
      )}
    </motion.div>
  );
};

export default ThirdText;
