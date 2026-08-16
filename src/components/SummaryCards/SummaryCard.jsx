function SummaryCard({ title, value }) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
                {title}
            </p>

            <p className="mt-2 text-2xl font-semibold">
                ₹{value.toLocaleString("en-IN")}
            </p>
        </div>
    );
}

export default SummaryCard;