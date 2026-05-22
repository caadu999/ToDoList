import { createContext, useContext } from "react";

export const TarefasContext = createContext();

export function useTarefas() {
  return useContext(TarefasContext);
}
