import React from "react";
import styles from "./Proyects.module.css";

const Projects = () => {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1721618824/Captura_de_pantalla_2024-07-21_222645_lpwsbt.png", // Reemplaza con la URL de tu imagen
      title: "DeliVeloz",
      info: "Desarrollo de un e-commerce de comida rápida, sus funcionalidades incluyen pasarela de pago, dashboard de usuario y administrador, valoración de productos, y muchas más.",
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
    },
  ];

  return (
    <section className={styles.projectSection}>
      <h3>Proyectos</h3>
      <div className={styles.projects}>
       {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <img src={project.image} alt={project.title} className={styles.projectImage} />
          <div className={styles.projectDetails}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectInfo}>{project.info}</p>
            <div className={styles.techList}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
             
      </div>
    </section>
  );
};

export default Projects;
