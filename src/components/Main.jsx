import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home"
import Show from "../pages/Show";

const Main = (props) => {
    return (
        <main>
            <Outlet />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show" element={<Show />} />
            </Routes>
        </main>
    )
}

export default Main