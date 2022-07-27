import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const EleventhText = () => {
  const [render, setRender] = useState(true);
  return (
    <div className={styles.scene}>
      <div className={styles.banner}>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
      </div>
    </div>
  );
};

export default EleventhText;
