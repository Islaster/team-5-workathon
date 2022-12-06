import NeedButton from "./buttons/NeedButton";
import GiveButton from "./buttons/GiveButton";
import "./Banner.css";

const Banner = (props) => {
    return (
        <div className="banner">
        <NeedButton />
        <GiveButton />
        <h1 className="text">text</h1>
        </div>
    )
}

export default Banner