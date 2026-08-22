import transactions from "../../data/transactions";

function Categories() {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const categoryTotals = expenseTransactions.reduce((total, transaction) => {
    total[transaction.category] =
      (total[transaction.category] || 0) + transaction.amount;

    return total;
  }, {});

  const totalExpense = expenseTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  return (
    <div className="space-y-6">
      <h1>Categories</h1>

      <h2>Expense Breakdown</h2>

      {Object.keys(categoryTotals).length > 0 ? (
        <>
          <div>
            <p className="text-sm text-gray-500">Total Expenses</p>

            <p className="font-semibold">
              ₹{totalExpense.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="space-y-3">
            {Object.entries(categoryTotals).map(([name, amount]) => {
              const percentage = (amount / totalExpense) * 100;

              return (
                <div key={name} className="rounded-lg border p-4">
                  <div className="flex justify-between">
                    <p>{name}</p>

                    <p className="text-sm text-gray-500">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₹{amount.toLocaleString("en-IN")}
                  </p>

                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p>No expenses yet.</p>
      )}
    </div>
  );
}

export default Categories;
