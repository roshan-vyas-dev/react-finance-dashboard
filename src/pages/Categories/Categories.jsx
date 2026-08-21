function Categories() {
  const categories = [
    {
      id: 1,
      name: "Food",
      amount: 500,
      type: "expense",
    },
    {
      id: 2,
      name: "Income",
      amount: 40000,
      type: "income",
    },
    {
      id: 3,
      name: "Utilities",
      amount: 2500,
      type: "expense",
    },
  ];

  const expenseCategories = categories.filter(
    (item) => item.type === "expense"
  );

  const totalExpense = expenseCategories.reduce((total, category) => {
    return total + category.amount;
  }, 0);

  return (
    <div className="space-y-6">
      <h1>Categories</h1>

      <h2>Expense Breakdown</h2>

      {expenseCategories.length > 0 ? (
        <>
          <div>
            <p className="text-sm text-gray-500">Total Expenses</p>

            <p className="font-semibold">
              ₹{totalExpense.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="space-y-3">
            {expenseCategories.map((category) => {
              const percentage = (category.amount / totalExpense) * 100;

              return (
                <div key={category.id} className="rounded-lg border p-4">
                  <div className="flex justify-between">
                    <p>{category.name}</p>

                    <p className="text-sm text-gray-500">
                      {percentage.toFixed(1)}%
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₹{category.amount.toLocaleString("en-IN")}
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
