import styles from "./TodoFiltro.module.scss";

export default function ToDoFiltro({ children, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <p>{children}</p>
    </div>
  );
}
