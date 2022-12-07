// import NeedButton from "./buttons/NeedButton";
// import GiveButton from "./buttons/GiveButton";
import LoginBtn from "./buttons/Login";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="bannercontents">
        <img src="https://i.imgur.com/dkMmErl.png" alt="logo" />
        <LoginBtn />
      </div>
    </div>
  );
}
