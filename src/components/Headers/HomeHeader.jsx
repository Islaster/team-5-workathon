import "../Header.css";
import { useLocation } from "react-router-dom";

export default function HomeHeader() {
    const { pathname } = useLocation();
    return (
        <div className="navy">
            <h1>Welcome!</h1>
        </div>
    )
}