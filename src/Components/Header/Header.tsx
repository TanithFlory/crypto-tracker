import SHeader from "./Header.styles";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { useTranslation, Trans } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
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
          <input
            type="text"
            placeholder={t("searchPlaceholder") ?? undefined}
          />
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
