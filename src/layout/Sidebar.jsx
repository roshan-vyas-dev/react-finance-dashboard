import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="flex w-36 shrink-0 flex-col gap-2 border-r p-2 sm:w-48 sm:p-4">
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive
                        ? "rounded-md bg-blue-100 px-3 py-2 text-blue-700"
                        : "rounded-md px-3 py-2 text-gray-700"
                }
            >
                Dashboard
            </NavLink>

            <NavLink
                to="/transactions"
                className={({ isActive }) =>
                    isActive
                        ? "rounded-md bg-blue-100 px-3 py-2 text-blue-700"
                        : "rounded-md px-3 py-2 text-gray-700"
                }
            >
                Transactions
            </NavLink>

            <NavLink
                to="/categories"
                className={({ isActive }) =>
                    isActive
                        ? "rounded-md bg-blue-100 px-3 py-2 text-blue-700"
                        : "rounded-md px-3 py-2 text-gray-700"
                }
            >
                Categories
            </NavLink>
        </aside>
    );
}

export default Sidebar;