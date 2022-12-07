import "../Header.css";
import { useLocation } from "react-router-dom";

export default function EventDetailsHeader() {
    const { pathname } = useLocation();
    return (
        <div className="red">
            <h1>Event Details</h1>
        </div>
    )
}