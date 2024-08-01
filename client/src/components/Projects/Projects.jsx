import React from "react";
import styles from "./Proyects.module.css";

const Projects = () => {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1721618824/Captura_de_pantalla_2024-07-21_222645_lpwsbt.png", // Reemplaza con la URL de tu imagen
      title: "DeliVeloz",
      info: "Desarrollo de un E-commerce de comida rápida, sus funcionalidades incluyeron pasarela de pago, Dashboard de usuario y administrador, Deploy, Autenticación local y de terceros, filtros combinados, valoración de productos, Local Storage, notificaciones, borrado lógico.",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Redux",
        "Postgres",
        "Express",
        "Tailwind",
        "NodeJs",
      ],
      videoLink: "https://youtu.be/nwZHkYNf8XE",
    },
    {
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1721618702/Captura_de_pantalla_2024-07-21_222436_hxepu6.png", // Reemplaza con la URL de tu imagen
      title: "Renacer Juntas",
      info: "Desarrollo de una aplicación móvil cuyo objetivo es prevenir la violencia basada en género, ofreciendo recursos y apoyo psicosocial a las usuarias. Las funcionalidades incluyen un dashboard de usuario y de administrador (agente psicosocial), talleres psicosociales, navbar, notificaciones, autenticación de usuarios y local storage",
      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Redux",
        "Postgres",
        "Express",
        "Tailwind",
        "NodeJs",
      ],
      videoLink: "https://youtu.be/qceQSv3Xlio",
    },
    {
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1722523597/Captura_de_pantalla_2024-08-01_094322.png", // Reemplaza con la URL de tu imagen
      title: "BlogCafé",
      info: "Plantillas de diseño responsivo para proyectos",
      technologies: ["HTML", "CSS"],
      videoLink: "https://coffe-jchapid.netlify.app/",
    },
    {
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1722523813/Captura_de_pantalla_2024-08-01_094959.png", // Reemplaza con la URL de tu imagen
      title: "ShirtStore",
      info: "Plantillas de diseño responsivo para proyectos",
      technologies: ["HTML", "CSS"],
      videoLink: "https://shirt-jchapid.netlify.app",
    },
  ];

  return (
    <section className={styles.projectSection}>
      <h3>Proyectos</h3>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div key={index} className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectDetails}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectInfo}>{project.info}</p>
                <div className={styles.techList}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
