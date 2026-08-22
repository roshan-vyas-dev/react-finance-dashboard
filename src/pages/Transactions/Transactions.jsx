import { useState } from "react";
import TransactionItem from "../../components/RecentTransactions/TransactionItem";
import transactions from "../../data/transactions";

function Transactions() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");



  const filteredTransactions = transactions.filter((transaction) => {
    const matchesType =
      selectedType === "all" || transaction.type === selectedType;

    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-semibold">Transactions</h1>

      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full rounded-md border px-4 py-2 outline-none sm:max-w-md"
      />

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => setSelectedType("all")}
          className={
            selectedType === "all"
              ? "rounded-md bg-blue-600 px-4 py-2 text-white"
              : "rounded-md border px-4 py-2"
          }
        >
          All
        </button>

        <button
          onClick={() => setSelectedType("income")}
          className={
            selectedType === "income"
              ? "rounded-md bg-blue-600 px-4 py-2 text-white"
              : "rounded-md border px-4 py-2"
          }
        >
          Income
        </button>

        <button
          onClick={() => setSelectedType("expense")}
          className={
            selectedType === "expense"
              ? "rounded-md bg-blue-600 px-4 py-2 text-white"
              : "rounded-md border px-4 py-2"
          }
        >
          Expense
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p className="py-8 text-center text-gray-500">
            No transactions found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Transactions;
