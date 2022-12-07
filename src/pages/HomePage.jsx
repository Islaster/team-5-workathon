import SearchBar from "../components/SearchBar";
import "./HomePage.css";

export default function HomePage(props) {
    return (
        <div className="homepage">
            <h1>Welcome!</h1>
            <SearchBar />
            <h2>Pop Up Pantries Nearby</h2>
            <div className="popup-cards">
                <div className="pop-categories">
                    <h2>Pop Up Pantry #1</h2>
                </div>
                <div className="pop-categories">
                    <h2>Pop Up Pantry #2</h2>
                </div>
                <div className="pop-categories">
                    <h2>Pop Up Pantry #2</h2>
                </div>
            </div>
            <div className="near-me-cards">
                <div className="near-me-categories">
                    <h2>Food Near Me</h2>
                </div>
                <div className="near-me-categories">
                    <h2>Groceries Near Me</h2>
                </div>
                <div className="near-me-categories">
                    <h2>SNAP Retailers</h2>
                </div>
            </div>
            
        </div>
    )
}