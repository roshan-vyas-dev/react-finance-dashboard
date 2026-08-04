import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout({children}) {
    return (
        <div className="min-h-screen">
            <Header />

            <div className="flex">
                <Sidebar />

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default AppLayout;