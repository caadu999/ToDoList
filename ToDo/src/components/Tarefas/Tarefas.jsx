import { TarefaItem } from "../TarefaItem/TarefaItem";
import { useTarefas } from "../../hooks/Context";

export function Tarefas({  handleRemove, handleConcluir }) {
  const {tarefas} = useTarefas()
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem
          handleConcluir={handleConcluir}
          tarefa={tarefa}
          key={tarefa.id}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
}
