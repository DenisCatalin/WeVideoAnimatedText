import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const EighthText = () => {
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
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            W
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            V
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            i
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            d
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            e
          </motion.h1>
          <motion.h1
            className={styles.text}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            o
          </motion.h1>
        </>
      )}
    </motion.div>
  );
};

export default EighthText;
