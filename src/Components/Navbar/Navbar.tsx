import SNavbar from "./Navbar.styles";

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
        <div>Language</div>
      </ul>
    </SNavbar>
  );
};

export default Navbar;
