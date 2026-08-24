import SummaryCards from "../../components/SummaryCards/SummaryCards";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";
import SpendingByCategory from "../../components/SpendingByCategory/SpendingByCategory";
import transactions from "../../data/transactions";

function Dashboard() {

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );

  const totalIncome = incomeTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalExpense = expenseTransactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  const balance = totalIncome - totalExpense;

    const summary = {
  balance: balance,
  income: totalIncome,
  expenses: totalExpense,
};


  const categoryTotals = expenseTransactions.reduce((total, transaction) => {
    total[transaction.category] =
      (total[transaction.category] || 0) + transaction.amount;

    return total;
  }, {});

  const categories = Object.entries(categoryTotals).map(([name, amount]) => {
    return {
      name,
      amount,
    };
  });
  return (
    <div className="p-4 sm:p-6">
      <h1>Dashboard</h1>

      <SummaryCards summary={summary} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentTransactions transactions={transactions} />
        <SpendingByCategory categories={categories} />
      </div>
    </div>
  );
}

export default Dashboard;
