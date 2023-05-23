import { useEffect } from "react";
import SCryptoBenefits from "./CryptoBenefits.styles";
import Security from "../../assets/security.svg";
import Speed from "../../assets/speed.svg";
import Defi from "../../assets/defi.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    icon: <Defi />,
    title: "Decentralized",
    description:
      "Crypto decentralization empowers individuals by removing reliance on centralized authorities. By distributing control across a network of nodes, cryptocurrencies ensure transparency, immutability, and censorship resistance. This decentralized nature fosters trust, security, and promotes financial sovereignty for users worldwide.",
  },
  {
    icon: <Security />,
    title: "Secured",
    description:
      "Crypto security is paramount in protecting digital assets. Strong encryption, secure key management, and robust authentication mechanisms are crucial for safeguarding cryptocurrencies and ensuring the integrity and confidentiality of transactions in decentralized networks.",
  },
  {
    icon: <Speed />,
    title: "Speed",
    description:
      "Crypto transaction speed is essential for widespread cryptocurrency adoption. Faster blockchain networks and layer-2 scaling solutions enable near-instantaneous transfers, enhancing the efficiency and convenience of digital asset transactions. This improved transaction speed paves the way for broader acceptance and mainstream usage of cryptocurrencies in various sectors of the economy.",
  },
];

const CryptoBenefits = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <SCryptoBenefits>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <div>{benefit.icon}</div>
          <div className="crypto-content">
            <h1>{benefit.title}</h1>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </SCryptoBenefits>
  );
};

export default CryptoBenefits;
