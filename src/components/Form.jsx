import { useState } from "react";
import "./form.css";

function Form({ listTransactions, setListTransactions }) {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [inputType, setInputType] = useState("entrada");

  function handleInput(event) {
    event.preventDefault();
    if (input !== "" && input !== " " && inputValue !== 0) {
      setListTransactions([
        {
          description: input,
          type: inputType,
          value: Number(inputValue),
        },
        ...listTransactions,
      ]);
    } else {
      alert("Algum valor não foi inserido");
    }
  }

  return (
    <form onSubmit={handleInput}>
      <div className="div-input-descricao">
        <input
          className="input-descricao"
          type="text"
          placeholder="Digite aqui sua descrição"
          name="description"
          onChange={(event) => setInput(event.target.value)}
          key={"description"}
        />
      </div>
      <div className="div-input-valor-tipo">
        <input
          className="input-valor"
          type="number"
          placeholder="R$"
          name="value"
          onChange={(event) => setInputValue(event.target.value)}
          key={"value"}
        />
        <select
          className="select-tipo"
          name="type"
          id=""
          onChange={(event) => setInputType(event.target.value)}
          key={"type"}
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saida</option>
        </select>
      </div>
      <button className="button-enviar">Inserir Valor</button>
    </form>
  );
}

export default Form;
