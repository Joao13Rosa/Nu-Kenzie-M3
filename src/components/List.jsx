import "../App.css";

function List({ listTransactions, transaction }) {
  return (transaction ? transaction : listTransactions).map(
    (transaction, index) => {
      return transaction.type === "entrada" ? (
        <li className="li-entrada" transaction={transaction} key={index}>
          <div className="div-desc-tipo">
            <p className="p-descricao">{transaction.description}</p>
            <p className="p-tipo">{transaction.type}</p>
          </div>
          <div className="div-valor">
            <p className="p-valor">R$ {transaction.value}</p>
          </div>
        </li>
      ) : (
        <li className="li-saida" transaction={transaction} key={index}>
          <div className="div-desc-tipo">
            <p className="p-descricao">{transaction.description}</p>
            <p className="p-tipo">{transaction.type}</p>
          </div>
          <div className="div-valor">
            <p className="p-valor">R$ {transaction.value}</p>
          </div>
        </li>
      );
    }
  );
}

export default List;
