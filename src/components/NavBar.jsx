import "./NavBar.css";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <ul>
                    <li><NavLink to="/home"><img src="https://i.imgur.com/ivrifge.png" alt="home"/></NavLink></li>
                    <li><NavLink to="/events"><img src="https://i.imgur.com/18QlFRL.png" alt="events"/></NavLink></li>
                    <li><NavLink to="/benefits"><img src="https://i.imgur.com/90eBwhR.png" alt="benefits"/></NavLink></li>
                    <li><NavLink to="/favorites"><img src="https://i.imgur.com/A8NGURD.png" alt="favorites"/></NavLink></li>
                </ul>
            </div>
        </>
    )
}

