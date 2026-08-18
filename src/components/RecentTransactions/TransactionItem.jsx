function TransactionItem({ transaction }) {
  const isIncome = transaction.type === "income";

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
      <div className="min-w-0">
        <p className="truncate">{transaction.title}</p>
        <p>{transaction.category}</p>
      </div>
      <p
        className={`shrink-0 font-semibold ${
          isIncome ? "text-green-600" : "text-red-600"
        }`}>
        {isIncome ? "+" : "-"}₹{transaction.amount.toLocaleString("en-IN")}
      </p>
    </div>
  );
}


export default TransactionItem;
