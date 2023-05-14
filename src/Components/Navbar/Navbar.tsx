import SNavbar from "./Navbar.styles";
import Language from "./Language/Language";
const Navbar = () => {
  return (
    <SNavbar>
      <h1>ThorSWAP</h1>
      <ul>
        {["Home", "About", "Coins", "Prices"].map((d, index) => {
          return (
            <li key={`nav-option-${index}`}>
              <a href={`#${d}`}>{d}</a>
            </li>
          );
        })}
        <Language />
      </ul>
    </SNavbar>
  );
};

export default Navbar;
