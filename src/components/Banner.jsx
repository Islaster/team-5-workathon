// import NeedButton from "./buttons/NeedButton";
// import GiveButton from "./buttons/GiveButton";
import GetStartedBtn from "./buttons/GetStarted";
import "./Banner.css";

export default function Banner(props) {
    return (
        <div className="banner">
            <div className="bannercontents">
                <img src="https://i.imgur.com/7BEtBcP.png" alt="logo" />
                <div className="imageplaceholder"></div>
                <GetStartedBtn />
            </div>
        </div>
    )
}