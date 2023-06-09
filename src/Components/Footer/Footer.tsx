import { SFooter, SFooterTradeMark } from "./Footer.styles";
import useAos from "../../CustomHooks/useAos";

const Footer = () => {
  useAos();
  const footerLinks = [
    {
      title: "Lorem ipsum",
      links: [
        "Consectetur ",
        "Sed do ",
        "Quis nostrud",
        "Excepteur ",
        "Occaecat ",
      ],
    },
    {
      title: "Dolor sit ",
      links: ["Adipiscing ", "Sed do ", "Tempor ", "Ut labore et ", "Magna "],
    },
    {
      title: "Vestibulum ante ",
      links: [
        "Primis in ",
        "Orci luctus ",
        "Ultrices posuere ",
        "Curae; Maecenas ",
        "Leo sed ",
      ],
    },
    {
      title: "Nullam lacinia",
      links: [
        "Urna at massa",
        "Consectetur ",
        "Pellentesque nec ",
        "Phasellus ut ",
        "Sem. Morbi ",
      ],
    },
    {
      title: "Sed consequat",
      links: [
        "Massa vel ",
        "Consectetur ",
        "Fusce tempor ",
        "Leo eget ",
        "Nunc consequat ",
        "Pellentesque nec ",
        "Phasellus ut ",
      ],
    },
    {
      title: "Praesent id ",
      links: [
        "Sed justo ",
        "Consectetur ",
        "Sed suscipit ",
        "Eget metus ",
        "Massa vel ",
        "Consectetur ",
        "Fusce tempor ",
        "Sed vehicula ",
      ],
    },
  ];

  return (
    <>
      <SFooter
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="0"
        data-aos-offset="0"
      >
        {footerLinks.map((d, index) => {
          return (
            <div key={`footer-${index}`}>
              <h3>{d.title}</h3>
              <ul>
                {d.links?.map((d, index) => {
                  return <li key={`sublink-${index}`}>{d}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </SFooter>
      <SFooterTradeMark
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-offset="0"
        data-aos-delay="0"
      >
        <h3>CryptoTracker</h3>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </SFooterTradeMark>
    </>
  );
};

export default Footer;
