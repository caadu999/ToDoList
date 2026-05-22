import { useEffect, useState, useMemo } from "react";
import { useInput } from "./hooks/useInput";
import { Header } from "./components/header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { Tarefas } from "./components/Tarefas/Tarefas";
import ToDoFiltro from "./components/filtro/TodoFiltro";
import { TarefasContext } from "./hooks/Context";

function App() {
  const API_URL = "https://6a0f72cad2a9857070356c24.mockapi.io/v1/tasks";
  const inputTarefa = useInput();
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const tarefasFiltradas = useMemo(() => {
    return tarefas.filter((tarefa) => {
      if (filtro === "concluidas") return tarefa.concluida;
      if (filtro === "pendentes") return !tarefa.concluida;
      return true;
    });
  }, [tarefas, filtro]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTarefas(data))
      .catch((erro) => {
        console.error("Erro ao buscar dados", erro);
      });
  }, []);

  useEffect(() => {
    console.log("tarefas atualizadas:", tarefas);
  }, [tarefas]);

  function handleSubmit(e) {
    e.preventDefault();
    inputTarefa.limpar();

    const novaTarefa = { texto: inputTarefa.valor, concluida: false };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaTarefa),
    })
      .then((res) => res.json())
      .then((data) => {
        setTarefas([...tarefas, data]);
        inputTarefa.limpar();
      })
      .catch((erro) => console.error("Erro ao carregar tarefas", erro));
  }

  function handleConcluir(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        String(tarefa.id) === String(id)
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    );
    console.log("id clicado:", id);
  }

  function handleRemove(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
      })
      .catch((erro) => console.error("erro ao deletar!", erro));
  }

  return (
    <>
      <TarefasContext.Provider value={{ tarefas: tarefasFiltradas }}>
        <Header>
          <ToDoFiltro onClick={() => setFiltro("todas")}>TODAS</ToDoFiltro>
          <ToDoFiltro onClick={() => setFiltro("pendentes")}>
            PENDENTES
          </ToDoFiltro>
          <ToDoFiltro onClick={() => setFiltro("concluidas")}>
            CONCLUÍDAS
          </ToDoFiltro>
        </Header>
        <TodoForm
          onChange={inputTarefa.onChange}
          inputTarefa={inputTarefa}
          handleSubmit={handleSubmit}
        ></TodoForm>
        <Tarefas
          handleRemove={handleRemove}
          handleConcluir={handleConcluir}
        ></Tarefas>
      </TarefasContext.Provider>
    </>
  );
}

export default App;
