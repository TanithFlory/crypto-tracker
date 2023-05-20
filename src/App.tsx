import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { useState, useCallback, useEffect } from "react";
import { ICoin } from "./types";
import { CryptoDataContext } from "./Contexts/CryptoDataContext";
import { BasicCoinData } from "./Api/ApiService";

function App() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const getData = useCallback(async () => {
    const response = await BasicCoinData();
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
          path="/"
          element={
            <CryptoDataContext.Provider value={coins}>
              <Home />
            </CryptoDataContext.Provider>
          }
        />
        <Route
          path="home"
          element={
            <CryptoDataContext.Provider value={coins}>
              <Home />
            </CryptoDataContext.Provider>
          }
        />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
