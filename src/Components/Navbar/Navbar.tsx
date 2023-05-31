import SNavbar from "./Navbar.styles";
import Language from "./Language/Language";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HamburgerClose, HamburgerOpen } from "../../constants/SVG/Hamburger";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const scrollAbout = (): void => {
    setMenu(true);
    const aboutUs = document.getElementsByClassName("socials")[0];
    aboutUs.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <SNavbar>
      <h1>ThorSWAP</h1>
      {!menu && (
        <button onClick={() => setMenu((prev) => !prev)}>
          <HamburgerOpen />
        </button>
      )}
      {menu && (
        <button onClick={() => setMenu((prev) => !prev)}>
          <HamburgerClose />
        </button>
      )}
      <ul className={menu ? "animate" : ""}>
        {["Home", "About", "Coins", "Prices"].map((d, index) => {
          return (
            <li key={`nav-option-${index}`}>
              <Link
                onClick={
                  d === "About"
                    ? () => scrollAbout()
                    : () => setMenu((prev) => !prev)
                }
                to={
                  d === "Coins" || d === "Prices"
                    ? `/crypto-tracker/${d.toLowerCase()}/1`
                    : d === "About"
                    ? `#`
                    : `/crypto-tracker/${d.toLowerCase()}`
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
