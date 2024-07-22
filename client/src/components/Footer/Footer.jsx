import React from "react";
import styles from "./Footer.module.css"

function Footer(){
    return (
      <footer className={styles.footer}>
        <p className={styles.footer_text}>
          © 2024 Jose Chapid. Todos los derechos reservados.
        </p>
      </footer>
    );
}

export default Footer