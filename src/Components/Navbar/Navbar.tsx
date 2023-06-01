import SNavbar from "./Navbar.styles";
import Language from "./Language/Language";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const scrollHandler = (type: string): void => {
    setMenu(true);
    if (type === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const aboutUs = document.getElementsByClassName("socials")[0];
      aboutUs.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleNavbar = () => {
      const navbar = document.querySelector("nav");
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos < currentScrollPos && window.innerWidth > 1023) {
        navbar?.classList.add("offScreen");
      } else {
        navbar?.classList.remove("offScreen");
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);
  return (
    <SNavbar>
      <Link to={"/"}>
        <h1>CryptoTracker</h1>
      </Link>
      <button onClick={() => setMenu((prev) => !prev)}>
        <div className={`menu-line ${menu && "cross45"}`} />
        <div className={`menu-line ${menu && "opacity-0"}`} />
        <div className={`menu-line ${menu && "cross-45"}`} />
      </button>
      <ul className={menu ? "animate" : ""}>
        {["Home", "About", "Coins", "Prices"].map((d, index) => {
          return (
            <li key={`nav-option-${index}`}>
              <Link
                onClick={
                  d === "About"
                    ? () => scrollHandler("About")
                    : d === "Home"
                    ? () => scrollHandler("Home")
                    : () => setMenu((prev) => !prev)
                }
                to={d === "About" ? `#` : `/${d.toLowerCase()}`}
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
