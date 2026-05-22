import styles from "./TarefaItem.module.scss";

export function TarefaItem({ tarefa, handleRemove, handleConcluir }) {
  return (
    <li className={styles.itemTarefa}>
      <div className={styles.itemNome}>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => handleConcluir(tarefa.id)}
        />
        <p
          style={{ textDecoration: tarefa.concluida ? "line-through" : "none", color: tarefa.concluida ? "grey" : "black" }}
        >
          {tarefa.texto}
        </p>
      </div>
      <button className={styles.Button} onClick={() => handleRemove(tarefa.id)}>
        Remover
      </button>
    </li>
  );
}
