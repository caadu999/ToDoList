import { useState } from "react";

export function useInput(valorInicial = "") {
  const [valor, setValor] = useState(valorInicial);

  const onChange = function (e) {
    setValor(e.target.value);
    console.log(valor);
  };

  const limpar = function () {
    setValor("");
  };

  return {
    valor,
    onChange,
    limpar,
  };
}
