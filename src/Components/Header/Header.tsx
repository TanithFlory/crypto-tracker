import SHeader from "./Header.styles";
import { BsSearch, BsChevronDown } from "react-icons/bs";
const Header = () => {
  return (
    <SHeader>
      <div>
        <h1>
          Unlock The <br /> <span>Decentralized </span>
          Future.
        </h1>
        <h3>
          1 - click Trade + Earn Yield on Native <span>Bitcoin.</span> <br />{" "}
          Your <span>Keys.</span>
        </h3>
      </div>
      <div>
        <div>
          <input type="text" placeholder="Search 1,000 coins across networks" />
          <button>
            <BsSearch />
          </button>
        </div>
        <button>
          Learn More <BsChevronDown />
        </button>
      </div>
    </SHeader>
  );
};

export default Header;
