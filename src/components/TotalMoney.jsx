function TotalMoney({ listTransactions }) {
  const valorTotal = listTransactions.reduce(
    (valorAnterior, valorAtual) =>
      valorAtual.type === "entrada"
        ? valorAnterior + valorAtual.value
        : valorAnterior - valorAtual.value,
    0
  );
  return valorTotal;
}

export default TotalMoney;
