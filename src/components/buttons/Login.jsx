import "./Login.css";
import { NavLink } from 'react-router-dom';


export default function LoginBtn(props) {
    return (
        <div className="loginbtn">
            <NavLink to="/home">
                <button className="login">Log In</button>
            </NavLink>
            <div>
                <button className="signup">Sign Up</button>
            </div>
        </div>
    )
} 