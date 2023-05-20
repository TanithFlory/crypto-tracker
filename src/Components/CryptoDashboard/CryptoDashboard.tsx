import { useParams } from "react-router-dom";
import axios from "axios";
import SCryptoDashboard from "./CryptoDashboard.styles";

const CryptoDashboard = () => {
  const { id } = useParams();
  return <SCryptoDashboard></SCryptoDashboard>;
};

export default CryptoDashboard;
