import { useState } from "react";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);

  const [transaction, setTransaction] = useState(false);

  function filterTodos() {
    setTransaction(false);
  }

  function filterEntradas() {
    const filteredTransaction = listTransactions.filter(
      (elem) => elem.type === "entrada"
    );
    setTransaction(filteredTransaction);
  }

  function filterDespesas() {
    const filteredTransaction = listTransactions.filter(
      (elem) => elem.type === "saída"
    );
    setTransaction(filteredTransaction);
  }

  return (
    <div className="App">
      <header>
        <p className="p-header">Nu Kenzie</p>
        <button className="button-header">Inicio</button>
      </header>
      <div className="container-geral">
        <div className="container">
          <div className="div-dados">
            <div className="div-form">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
            <div className="div-container-total">
              <div className="div-total">
                <p>Valor Total:</p>
                <p className="p-total">
                  R$ {<TotalMoney listTransactions={listTransactions} />}
                </p>
              </div>
              <div className="div-total-text">
                <p className="p-descricao-saldo">O valor se refere ao saldo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-listas">
          <div className="div-titulo">
            <p className="p-titulo">Resumo Financeiro</p>
            <button
              className="button-filtro todos"
              onClick={() => filterTodos()}
            >
              Todos
            </button>
            <button className="button-filtro" onClick={() => filterEntradas()}>
              Entradas
            </button>
            <button className="button-filtro" onClick={() => filterDespesas()}>
              Despesas
            </button>
          </div>
          <div className="lista">
            <ul>
              <List
                listTransactions={listTransactions}
                transaction={transaction}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
