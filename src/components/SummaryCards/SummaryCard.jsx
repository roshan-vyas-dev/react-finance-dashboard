function SummaryCard({ title, value }) {
  return (
<div className="rounded-xl border p-4">
          <p>{title}</p>
      <p>{value}</p>
    </div>
  );
}

export default SummaryCard;
