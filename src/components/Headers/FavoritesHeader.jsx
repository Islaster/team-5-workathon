import "../Header.css";
import { useLocation } from "react-router-dom";

export default function FavoritesHeader() {
    const { pathname } = useLocation();
    return (
        <div className="red">
            <h1>Favorites</h1>
        </div>
    )
}