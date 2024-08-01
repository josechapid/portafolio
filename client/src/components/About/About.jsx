import React from 'react';
import styles from './About.module.css'

import perfil from "../../assets/logos/joseperfil.jpg"

function About() {
  return (
    <section className={styles.container}>
      <h3>Acerca de mí</h3>
      <div className={styles.perfil}>
        <div className={styles.perfil_imagen}>
          <img src={perfil} alt="perfil" />
        </div>

        <div className={styles.perfil_texto}>
          <p>
            FullStack Developer con sólidos conocimientos en JavaScript, HTML,
            SQL, Postgrest, Sequelize y Express. He trabajado en proyectos
            ágiles tanto en el Front-end como el Back-end con tecnologías como
            NodeJs, React, React Native, Redux, Express, creando interfaces de
            usuario interactivas y receptivas, endpoints RESTful, manejo de
            solicitudes del cliente de manera eficiente. <br />
            Mi conocimiento incluye el uso de herramientas como Postgres,
            Sequelize y Redux para respaldar la funcionalidad del Front-end y la
            implementación de lógica de negocio necesaria. He logrado fortalecer
            a lo largo de mi formación soft skills como el trabajo colaborativo,
            autogestión y flexibilidad que permite adaptarme a diferentes
            entornos de desarrollo.
          </p>
          <div className={styles.logos}>
            <a
              href="https://github.com/josechapid"
              target="_blank"
              className={styles.a_logos}
            >
              <img
                className={styles.logos_image}
                src="../../../public/github-mark.svg"
                alt="logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-luis-chapid/"
              target="_blank"
              className={styles.a_logos}
            >
              <img
                className={styles.logos_image}
                src="../../../public/linkedin-icon-2.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About
