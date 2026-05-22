import styles from "./header.module.scss";

export function Header({ children }) {
  return (
    <div>
      <h1>O que fazer hoje?</h1>
      <div className={styles.divChildren}>{children}</div>
    </div>
  );
}
