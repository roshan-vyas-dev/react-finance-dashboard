import SummaryCard from "./SummaryCard";

function SummaryCards({ summary }) {
    const cards = [
        {
            title: "Balance",
            value: summary.balance,
        },
        {
            title: "Income",
            value: summary.income,
        },
        {
            title: "Expenses",
            value: summary.expenses,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cards.map((card) => (
                <SummaryCard
                    key={card.title}
                    title={card.title}
                    value={card.value}
                />
            ))}
        </div>
    );
}

export default SummaryCards;