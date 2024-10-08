import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Navbar";

export function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet/>
            </main>
        </>
    )
}