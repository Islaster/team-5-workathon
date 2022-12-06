import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home"
import Show from "../pages/Show";
import NewBank from "../pages/CreateBank";

const Main = (props) => {
    return (
        <main>
            <Outlet />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show" element={<Show />} />
                <Route path="/create" element={<NewBank />} />
            </Routes>
        </main>
    )
}

export default Main