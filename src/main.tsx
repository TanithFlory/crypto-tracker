import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import i18n from "./Components/Translations/i18next.ts";
import { I18nextProvider } from "react-i18next";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </HashRouter>
);
