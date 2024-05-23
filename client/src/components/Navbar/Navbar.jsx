import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"

function NavBar(){
    const navigate= useNavigate()

    return (
      <div className={styles.navbar}>
        <div className={styles.name}>
          <h1>JoseChapid</h1>
        </div>
        <div className={styles.links}>
          <Link to={"/about"} className={styles.navLink}>
            <button>About</button>
          </Link>
          <Link to={"/proyects"} className={styles.navLink}>
            <button>Proyectos</button>
          </Link>
          <Link to={"/tecnologias"} className={styles.navLink}>
            <button>Tecnologias</button>
          </Link>
          <Link to={"/educacion"} className={styles.navLink}>
            <button>Educacion</button>
          </Link>
        </div>
      </div>
    );
}

export default NavBar

