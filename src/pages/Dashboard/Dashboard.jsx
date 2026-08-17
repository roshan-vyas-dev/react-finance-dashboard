import SummaryCards from "../../components/SummaryCards/SummaryCards";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";
import SpendingByCategory from "../../components/SpendingByCategory/SpendingByCategory";

function Dashboard() {
  const summary = {
    balance: 25000,
    income: 40000,
    expenses: 15000,
  };

  const transactions = [
    {
      id: 1,
      title: "Grocery",
      category: "Food",
      amount: 500,
      type: "expense",
    },
    {
      id: 2,
      title: "Salary",
      category: "Income",
      amount: 40000,
      type: "income",
    },
    {
      id: 3,
      title: "Electricity Bill",
      category: "Utilities",
      amount: 2500,
      type: "expense",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Food",
      amount: 5000,
    },
    {
      id: 2,
      name: "Transport",
      amount: 2500,
    },
    {
      id: 3,
      name: "Utilities",
      amount: 3000,
    },
  ];

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
