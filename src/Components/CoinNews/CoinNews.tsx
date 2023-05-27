import SCoinNews from "./CoinNews.styles";
import { ICoinNews } from "../../types";
interface IProps {
  coinNews: ICoinNews[];
  coinName: string | undefined;
  coinImage: string | undefined;
}

const CoinNews = (props: IProps) => {
  return (
    <SCoinNews className="custom-scroll">
      <div>
        <h1 className="gradient-text">News</h1>
        <p>
          News related to{" "}
          {`${props.coinName?.charAt(0).toUpperCase()}${props.coinName?.slice(
            1
          )}`}
        </p>
      </div>
      <div>
        {props.coinNews?.map((d, index) => {
          return (
            d.urlToImage && (
              <a href={d.url} key={index}>
                <div>
                  <img
                    src={d.urlToImage || props.coinImage}
                    alt="article-img"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#303064"
                      d="M0,160L80,165.3C160,171,320,181,480,160C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3>
                    {(d.title + d.description).length > 200
                      ? `${d.title.slice(0, 100)}...`
                      : d.title}
                  </h3>
                  <p>
                    {" "}
                    {(d.title + d.description).length > 200
                      ? `${d.description.slice(0, 75)}...`
                      : d.description}
                  </p>
                </div>
              </a>
            )
          );
        })}
      </div>
    </SCoinNews>
  );
};

export default CoinNews;
