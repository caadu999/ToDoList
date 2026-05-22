import styles from "./TodoForm.module.scss";

export function TodoForm({ onChange, inputTarefa, handleSubmit }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Adicionar Tarefa"
        value={inputTarefa.valor}
        onChange={onChange}
      />
      <button type="submit">+</button>
    </form>
  );
}
