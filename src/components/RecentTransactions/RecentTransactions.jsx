import TransactionItem from "./TransactionItem";

function RecentTransactions({ transactions }) {
    return (
     <section >

       <h2 className="mb-4 text-xl font-semibold">
                Recent Transactions
            </h2>

         <div className="space-y-3">
            {transactions.map((transaction) => (
                <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>

     </section>
    );
}

export default RecentTransactions;