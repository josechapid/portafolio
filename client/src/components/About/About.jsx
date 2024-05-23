import styles from './About.module.css'



function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h3>Full Stack Developer</h3>
        <p className={styles.title}>Jose Luis Chapid</p>
        <p>
          Full Stack Developer con sólidos conocimientos en JavaScript, HTML,
          SQL,Postgrest, Sequelize y Express. He trabajadoen proyectos ágiles
          tanto en el Front-end como el Back-end con tecnologías como NodeJs,
          React, Redux, Express, creando interfaces de usuario interactivas y
          receptivas,endpoints RESTful, manejo de solicitudes delcliente de
          manera eficiente.
        </p>
        <div className={styles.logos}>
          <a
            href="https://github.com/josechapid"
            target="_blank"
            className={styles.a_logos}
          >
            <div>
              <img src="../../../public/github-mark.svg" alt="logo" />
            </div>
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jose-luis-chapid/"
            target="_blank"
            className={styles.a_logos}
          >
            <div>
              <img src="../../../public/linkedin-icon-2.svg" alt="logo" />
            </div>
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default About
