import SNavbar from "./Navbar.styles";
import Language from "./Language/Language";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <SNavbar>
      <h1>ThorSWAP</h1>
      <ul>
        {["Home", "About", "Coins", "Prices"].map((d, index) => {
          return (
            <li key={`nav-option-${index}`}>
              <Link to={`${d.toLowerCase()}`}>{d}</Link>
            </li>
          );
        })}
        <Language />
      </ul>
    </SNavbar>
  );
};

export default Navbar;
