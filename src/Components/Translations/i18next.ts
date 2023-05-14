import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    EN: {
      translations: {
        header: "Unlock The <br/> <1>Decentralized </1>Future.",
        headerSub:
          "Real-time <1>Cryptocurrency</1> Prices at Your <1>Fingertips.</1>",
        searchPlaceholder: "Search 1,000 coins across networks",
      },
    },
    ES: {
      translations: {
        header: "Desbloquea el <br /> Futuro <1>Descentralizado.</1>",
        headerSub:
          "Comercia y gana rentabilidad con un solo clic en <1>Bitcoin</1> nativo. <br /> Tus <1>Claves.</1>",
        searchPlaceholder: "Busca entre 1.000 monedas en redes",
      },
    },
  },
  fallbackLng: "EN",
  ns: ["translations"],
  defaultNS: "translations",
});
export default i18n;
