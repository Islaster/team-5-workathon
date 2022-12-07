import "./NavBar.css";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <ul>
                    <li><NavLink to="/home"><img src="https://i.imgur.com/G11lcUX.png" alt="home" className="home-icon"/></NavLink></li>
                    <li><NavLink to="/events"><img src="https://i.imgur.com/2Rj4urB.png" alt="events" className="events-icon"/></NavLink></li>
                    <li><NavLink to="/benefits"><img src="https://i.imgur.com/Yn7B6D8.png" alt="benefits" className="benefits-icon"/></NavLink></li>
                    <li><NavLink to="/favorites"><img src="https://i.imgur.com/Zjdt553.png" alt="favorites" className="favorites-icon"/></NavLink></li>
                </ul>
            </div>
        </>
    )
}

