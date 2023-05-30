import SNavbar from "./Navbar.styles";
import Language from "./Language/Language";
import { Link } from "react-router-dom";
import { useState } from "react";
import { images } from "../../constants/images";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <SNavbar>
      <h1>ThorSWAP</h1>
      {!menu && (
        <button onClick={() => setMenu((prev) => !prev)}>
          <images.hamburger />-
        </button>
      )}
      {menu && (
        <button onClick={() => setMenu((prev) => !prev)}>
          <images.hamburger />X
        </button>
      )}
      <ul className={menu ? "animate" : ""}>
        {["Home", "About", "Coins", "Prices"].map((d, index) => {
          return (
            <li key={`nav-option-${index}`}>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                to={
                  d === "Coins" || d === "Prices"
                    ? `/${d.toLowerCase()}/1`
                    : `/${d.toLowerCase()}`
                }
              >
                {d}
              </Link>
            </li>
          );
        })}
        <Language />
      </ul>
    </SNavbar>
  );
};

export default Navbar;
