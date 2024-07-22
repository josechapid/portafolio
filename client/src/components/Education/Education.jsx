import React from "react";

import styles from "./Education.module.css"


function Education() {
  const cards = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1721622305/Captura_de_pantalla_2024-07-21_232418_jdvcc3.png",
      title: "FullStack Developer",
      description: "Henry",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1721622305/Captura_de_pantalla_2024-07-21_232433_kh8s7b.png",
      title: "Fundamentos de Pyhton",
      description: "Platzi",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dlasrjiei/image/upload/v1721622305/Captura_de_pantalla_2024-07-21_232446_wltxze.png",
      title: "Frontend developer",
      description: "Platzi",
    },
  ];

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Educación</h3>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.image} alt={card.title} className={styles.image} />
            <div className={styles.info}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
