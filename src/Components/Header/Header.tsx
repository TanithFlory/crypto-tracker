import { useState } from "react";
import SHeader from "./Header.styles";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { useTranslation, Trans } from "react-i18next";
import { ICoin } from "../../types";
import Search from "../Search/Search";

interface IHeaderProps {
  coinData: ICoin[];
}

const Header = (props: IHeaderProps) => {
  const [searchMenu, setSearchMenu] = useState(false);
  const { t } = useTranslation();

  const toggleSearchMenu = (): void => {
    setSearchMenu((prev) => !prev);
  };

  return (
    <SHeader>
      <div>
        <h1>
          <Trans i18nKey={"header"}>
            a<span>b</span>
          </Trans>
        </h1>
        <h3>
          <Trans i18nKey={"headerSub"}>
            a<span>b</span>
          </Trans>
        </h3>
      </div>
      <div>
        <div>
          <div className="searchBox" onClick={() => toggleSearchMenu()}>
            {t("searchPlaceholder")}
            <div>
              <BsSearch />
            </div>
          </div>
          {searchMenu && (
            <Search
              className="search-menu"
              toggleMenu={toggleSearchMenu}
              coinData={props.coinData}
            />
          )}
        </div>
        <button>
          Learn More <BsChevronDown />
        </button>
      </div>
    </SHeader>
  );
};

export default Header;
