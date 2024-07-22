import React from "react";
import styles from "./Navbar.module.css"


function NavBar(){
    

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.barra}>
            <a href="#about" className={styles.logo}>
              <h1 className={styles.logo_nombre}>
                Dev<span className={styles.bold}>Web</span>
              </h1>
            </a>
            <nav className={styles.navegacion}>
              <a href="#about" className={styles.navbar_enlace}>
                Acerca de mí
              </a>
              <a href="#technologies" className={styles.navbar_enlace}>
                Tecnologías
              </a>
              <a href="#projects" className={styles.navbar_enlace}>
                Proyectos
              </a>
              <a href="#education" className={styles.navbar_enlace}>
                Educación
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
}

export default NavBar

