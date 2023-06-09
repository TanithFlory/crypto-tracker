import { useState } from "react";
import SHeader from "./Header.styles";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { useTranslation, Trans } from "react-i18next";
import Search from "../Search/Search";
const Header = () => {
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
            a<span className="gradient-text">b</span>
          </Trans>
        </h1>
        <h3>
          <Trans i18nKey={"headerSub"}>
            a<span className="gradient-text">b</span>
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
            <Search className="search-menu" toggleMenu={toggleSearchMenu} />
          )}
        </div>
        <button
          onClick={() => {
            const aboutUs =
              document.getElementsByClassName("crypto-benefits")[0];
            aboutUs.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Learn More <BsChevronDown />
        </button>
      </div>
    </SHeader>
  );
};

export default Header;
