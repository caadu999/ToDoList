todo-react-avancado
Aplicação de lista de tarefas desenvolvida em React com integração a uma API externa.

--------- FUNCIONALIDADES ----------
--Adicionar tarefas
--Remover tarefas
--Marcar tarefas como concluídas
--Filtrar tarefas por status (Todas, Pendentes, Concluídas)
--Persistência de dados via MockAPI

--------- TECNOLOGIAS ----------

--React
--Vite
--CSS Modules / SCSS
--MockAPI (REST API)

--------- CONCEITOS ----------
--useState
--useEffect
--useMemo
--useContext
--useImput(Hook customizado)
--Fetch com GET e POST

--------- COMO RODAR LOCALMENTE ----------

npm install
npm run dev

O projeto utiliza o MockAPI para persistência dos dados. Configure a API_URL no App.jsx com o seu endpoint

Cada tarefa tem a estrutura:
{
"id": "1",
"texto": "Minha tarefa",
"concluida": false
}
