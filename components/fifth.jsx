import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import WeVideoIcon from "./text-icon";

const FifthText = () => {
  const [render, setRender] = useState(true);
  return (
    <motion.div
      className={styles.textContainer}
      whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }}
      whileTap={{ scale: 1 }}
      onClick={() => setRender(!render)}
    >
      {render ? (
        <h1 className={styles.text}>Click</h1>
      ) : (
        <>
          <WeVideoIcon />
        </>
      )}
    </motion.div>
  );
};

export default FifthText;
