import CategoryItem from "./CategoryItem";

function SpendingByCategory({ categories }) {
    const total = categories.reduce(
        (sum, category) => sum + category.amount,
        0
    );

    return (
        <section className="mt-6">
            <h2 className="mb-4 text-xl font-semibold">
                Spending By Category
            </h2>

            <div className="space-y-3">
                {categories.map((category) => {
                    const percentage = (category.amount / total) * 100;

                    return (
                        <CategoryItem
                            key={category.id}
                            category={category}
                            percentage={percentage}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default SpendingByCategory;