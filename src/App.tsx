import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Coins from "./Pages/Coins/Coins";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useCallback, useEffect } from "react";
import { ICoin } from "./types";
import { CryptoDataContext } from "./Contexts/CryptoDataContext";
import { getBasicCoinData } from "./Api/ApiService";
function App() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const getData = useCallback(async () => {
    const response = await getBasicCoinData();
    setCoins(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/crypto-tracker"
          element={
            <CryptoDataContext.Provider value={coins}>
              <Home />
            </CryptoDataContext.Provider>
          }
        />
        <Route
          path="/crypto-tracker/home"
          element={
            <CryptoDataContext.Provider value={coins}>
              <Home />
            </CryptoDataContext.Provider>
          }
        />
        <Route path="/crypto-tracker/dashboard/:id" element={<Dashboard />} />
        <Route
          path="/crypto-tracker/coins/:page"
          element={
            <CryptoDataContext.Provider value={coins}>
              <Coins />
            </CryptoDataContext.Provider>
          }
        />
        <Route
          path="/crypto-tracker/prices/:page"
          element={
            <CryptoDataContext.Provider value={coins}>
              <Coins />
            </CryptoDataContext.Provider>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
