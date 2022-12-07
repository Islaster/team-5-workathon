import "../Header.css";
import { useLocation } from "react-router-dom";

export default function ShowHeader() {
    const { pathname } = useLocation();
    return (
        <div className="green">
            <h1>Pantry Details</h1>
        </div>
    )
}