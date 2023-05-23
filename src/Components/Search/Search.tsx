import { useState, useContext } from "react";
import { CryptoDataContext } from "../../Contexts/CryptoDataContext";
import SSearch from "./Search.styles";
import Coin from "./Coin";
import { BsSearch, BsFire } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { ICoin } from "../../types";

interface ISearchProps {
  className: string;
  toggleMenu: () => void;
}

const Search = (props: ISearchProps) => {
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState<ICoin[]>([]);
  const coinData = useContext(CryptoDataContext);
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchResults([]);
    let count = 0;
    for (let i = 0; i < coinData.length && count < 6; i++) {
      let item = coinData[i];
      if (
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
        e.target.value.length
      ) {
        count++;
        setSearchResults((prev) => [...prev, item]);
      }
    }
  };

  return (
    <SSearch className={props.className}>
      <div>
        <BsSearch />
        <input
          placeholder={t("searchPlaceholder") ?? undefined}
          onChange={searchHandler}
        />
        <div onClick={() => props.toggleMenu()}>
          <RxCrossCircled />
        </div>
      </div>
      <div>
        {searchResults.length ? (
          ""
        ) : (
          <div>
            Trending <BsFire />
          </div>
        )}
        {searchResults.length
          ? searchResults?.map((d) => {
              return <Coin key={d.id} d={d} />;
            })
          : coinData.slice(0, 8).map((d) => {
              return (
                d.id !== "tether" &&
                d.id !== "usd-coin" && <Coin key={d.id} d={d} />
              );
            })}
      </div>
    </SSearch>
  );
};

export default Search;
