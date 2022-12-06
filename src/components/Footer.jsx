import "./Footer.css";
import NavBar from "../components/NavBar"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <NavBar className="navbar" />
                <div>
                    &copy; 2022 GA Winter Hackathon Bobcats. All Rights Reserved<br/>
                    <span className="tiny-text">Icon by <a href="https://freeicons.io/profile/3">icon king1</a> on <a href="https://freeicons.io">freeicons.io</a></span>
                </div>
            </div>
        </>
    )
}