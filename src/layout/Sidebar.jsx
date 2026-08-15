import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-64 p-4 border-r min-h-screen">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/transactions">Transactions</Link> 
            <Link to="/categories">Categories</Link> 
        </aside>
    );
}

export default Sidebar;

