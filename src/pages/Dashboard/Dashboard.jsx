import SummaryCards from "../../components/SummaryCards/SummaryCards";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";

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

    return (
        <div>
            <h1>Dashboard</h1>

            <SummaryCards summary={summary} />
            <RecentTransactions transactions={transactions} />
        </div>
    );
}

export default Dashboard;