import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          alt=""
        />

        <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/71676577?v=4" />
          <strong>Raiane Honorato</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            {" "}
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
