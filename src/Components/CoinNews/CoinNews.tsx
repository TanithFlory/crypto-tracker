import SCoinNews from "./CoinNews.styles";

interface IProps {
  coinNews: any[];
  coinName: string | undefined;
}

const CoinNews = (props: IProps) => {
  return (
    <SCoinNews className="custom-scroll">
      <h1 className="gradient-text">
        News On{" "}
        {`${props.coinName?.charAt(0).toUpperCase()}${props.coinName?.slice(
          1
        )}`}
      </h1>
      {props.coinNews?.map((d, index) => {
        return (
          d.urlToImage && (
            <a href={d.url} key={index}>
              <div>
                <img src={d.urlToImage} alt="article-img" />
              </div>
              <div>
                <h3>{d.source.name}</h3>
                <p>{d.description}</p>
              </div>
            </a>
          )
        );
      })}
    </SCoinNews>
  );
};

export default CoinNews;
