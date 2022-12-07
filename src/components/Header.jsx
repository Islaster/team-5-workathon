import "./Header.css";
import { useLocation } from "react-router-dom";
import HomeHeader from "./Headers/HomeHeader";
import EventsHeader from "./Headers/EventsHeader";
import EventDetailsHeader from "./Headers/EventDetailsHeader";
import ShowHeader from "./Headers/ShowHeader";
import BenefitsHeader from "./Headers/BenefitsHeader";
import FavoritesHeader from "./Headers/FavoritesHeader";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <div className="header">
      {pathname === "/home" ? <HomeHeader /> : null}
      {pathname === "/events" ? <EventsHeader /> : null}
      {pathname === "/events/details" ? <EventDetailsHeader /> : null}
      {pathname === "/show" ? <ShowHeader /> : null}
      {pathname === "/benefits" ? <BenefitsHeader /> : null}
      {pathname === "/favorites" ? <FavoritesHeader /> : null}
    </div>
  );
}
