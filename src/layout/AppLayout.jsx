import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
        <div className="min-h-screen">
            <Header />

            <div className="flex">
                <Sidebar />

                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AppLayout;