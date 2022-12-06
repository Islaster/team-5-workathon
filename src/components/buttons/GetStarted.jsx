import "./GetStarted.css";
import { NavLink } from 'react-router-dom';


export default function GetStartedBtn(props) {
    return (
        <div className="GetStartBtn">
            <NavLink to="/home">
                <button className="getstarted">Get Started</button>
            </NavLink>
        </div>
    )
} 