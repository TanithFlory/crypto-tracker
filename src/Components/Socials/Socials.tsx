import { SSocials, SSocialAnchor } from "./Socials.styles";
import {
  BsTelegram,
  BsGithub,
  BsDiscord,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { ImMail4, ImBlogger2 } from "react-icons/im";
import { images } from "../../constants/images";
const Socials = () => {
  const socials = [
    {
      icon: <BsTelegram />,
      title: "Telegram",
      desc: "Join our chat.",
      color: "#5682A3",
    },
    {
      icon: <BsGithub />,
      title: "Github",
      desc: "Contribute.",
      color: "#E8A137",
    },
    {
      icon: <BsFacebook />,
      title: "Facebook",
      desc: "Follow us.",
      color: "#0C86EE",
    },
    {
      icon: <BsInstagram />,
      title: "Instagram",
      desc: "Follow for updates.",
      color:
        "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);",
    },
    {
      icon: <ImMail4 />,
      title: "Contact us",
      desc: "Get in touch with us.",
    },
    {
      icon: <ImBlogger2 />,
      title: "Blog",
      desc: "Learn about cryptocurrency.",
    },
  ];
  return (
    <SSocials className="socials">
      <div>
        <h1>Join our community</h1>
        <p>
          Learn more about Cryptocurrency, chat with others, contact us to learn
          more. Follow us for more information.
        </p>
      </div>
      <div>
        <SSocialAnchor to={"#"}>
          <div>
            <BsDiscord />
            <div>
              <h3>ThorSWAP on Discord</h3>
              <p>Ask questions on our channels.</p>
            </div>
          </div>
          <images.hills />
          <images.skater />
        </SSocialAnchor>
        {socials.map((d, index) => {
          return (
            <SSocialAnchor
              to={"#"}
              color={d.color || "var(--clr-blue)"}
              key={`social-${index}`}
            >
              {d.icon}
              <div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </SSocialAnchor>
          );
        })}
        <div>
          <h1>Subscribe to our newsletter.</h1>
          <p>Stay updated with latest updates on cryptocurrency.</p>
          <div>
            <input type="text" placeholder="Email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </SSocials>
  );
};

export default Socials;
