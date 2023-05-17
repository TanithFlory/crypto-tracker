import { SLanguage, SButton } from "./Language.styles";
import i18n from "../../Translations/i18next";
import { images } from "../../../constants/images";
import { useEffect, useState } from "react";
const Language = () => {
  const [options, setOptions] = useState<boolean>(false);
  const [languages, setLanguages] = useState<string[]>(["EN", "ES", "HI"]);
  useEffect(() => {
    handleLanguage(navigator.language.slice(0, 2).toUpperCase());
  }, []);
  const handleLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setLanguages(languages.sort((a) => (a === language ? -1 : 1)));
  };
  return (
    <SLanguage onClick={() => setOptions((prev) => !prev)}>
      {languages.map((d, index) => {
        return (
          <SButton
            key={index}
            gap={index * 36}
            type="button"
            onClick={() => options && handleLanguage(`${d}`)}
            className={!options && index ? "inactive" : ""}
          >
            <img src={images[d]} alt="HI" />
            {d}
          </SButton>
        );
      })}
    </SLanguage>
  );
};

export default Language;
