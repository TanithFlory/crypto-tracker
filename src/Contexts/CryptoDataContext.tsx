import { createContext } from "react";
import { ICoin } from "../types";

export const CryptoDataContext = createContext<ICoin[]>([]);
