// Technologies.js
import React from "react";
import styles from "./Techlogies.module.css";

function Technologies () {
  const technologies = [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Redux",
      logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    },
    {
      name: "Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Sequelize",
      logo: "https://raw.githubusercontent.com/sequelize/sequelize/master/docs/images/logo-small.png",
    },
    {
      name: "PostgreSQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
  ];

  return (
    <section className={styles.technologySection}>
      <h3>Tecnologías</h3>
      <div className={styles.technologies}>

      {technologies.map((tech, index) => (
        <div key={index} className={styles.technologyCard}>
          <img
            src={tech.logo}
            alt={tech.name}
            className={styles.technologyImage}
          />
          <h3 className={styles.technologyTitle}>{tech.name}</h3>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Technologies;
