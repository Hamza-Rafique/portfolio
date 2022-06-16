import React from "react";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Powered by <span className={styles.logo}>Hamza Rafique</span>
      </a>
    </footer>
  );
};

export default Footer;
