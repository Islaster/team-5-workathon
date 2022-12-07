import "../Header.css";
import { useLocation } from "react-router-dom";

export default function BenefitsHeader() {
    const { pathname } = useLocation();
    return (
        <div className="navy">
            <h1>Benefits</h1>
        </div>
    )
}