import SummaryCards from "../../components/SummaryCards/SummaryCards";

function Dashboard() {
    const summary = {
        balance: 25000,
        income: 40000,
        expenses: 15000,
    };

    return (
        <div>
            <h1>Dashboard</h1>

            <SummaryCards summary={summary} />
        </div>
    );
}

export default Dashboard;