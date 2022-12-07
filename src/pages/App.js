// import logo from './logo.svg';
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>;
export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname === "/" ? null : <Header />}
      <Main />
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}

// {<header className="App-header">
//   {/* <img src={logo} className="App-logo" alt="logo" /> */}
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header> }
