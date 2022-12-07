import "../Header.css";
import { useLocation } from "react-router-dom";

export default function EventsHeader() {
    const { pathname } = useLocation();
    return (
        <div className="red">
            <h1>Events</h1>
        </div>
    )
}