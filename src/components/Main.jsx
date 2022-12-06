import { Routes, Route, Outlet } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import BenefitsPage from "../pages/BenefitsPage";
import FavoritesPage from "../pages/FavoritesPage";
import Show from "../pages/Show";
import NewBank from "../pages/CreateBank";

const Main = (props) => {
    return (
        <main>
            <Outlet />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/benefits" element={<BenefitsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/show" element={<Show />} />
                <Route path="/create" element={<NewBank />} />
            </Routes>
        </main>
    )
}

export default Main