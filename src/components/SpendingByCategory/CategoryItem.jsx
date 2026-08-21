function CategoryItem({ category, percentage }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <p className="font-medium">{category.name}</p>

        <p className="text-sm text-gray-500">{percentage.toFixed(1)}%</p>
      </div>

      <p className="mt-1 text-sm text-gray-500">
        ₹{category.amount.toLocaleString("en-IN")}
      </p>

      <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default CategoryItem;
