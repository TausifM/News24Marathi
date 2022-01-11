import { Container } from "@material-ui/core";
import { useState, useEffect, useCallback } from "react";
import NewsItemCard from "./NewsItem/NewsItemCard";
import Spinner from "../../images/96x96.gif";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(0);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=ffb83e39161f4d3f86b3ed54dcf92a20&category=${props.category}`;

  // const fetchData = async () => {
  //   try {
  //     let response = await fetch(url);
  //     let json = await response.json();
  //     console.log(json);
  //     setArticles(json.articles);

  //     console.log("artc", articles);
  //   } catch (error) {
  //     console.log("error", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // fetchData();
  // return () => {
  //   console.log("unmount");
  // };
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      let response = await fetch(url);
      let json = await response.json();
      setArticles(json.articles);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // const handlePrevClick = async() => {
  //   try {
  //    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ffb83e39161f4d3f86b3ed54dcf92a20&page=${page -1}&pageSize=${props.pageSize}`;
  //   let response = await fetch(url);
  //   let json = await response.json();
  //   setArticles(json.articles)
  //   setPage(page-1);
  //   } catch (error) {
  //     throw error;
  //   } finally{
  //         setLoading(false);
  //   }
  // }
  let tv24ImageUrl =
    "https://3.bp.blogspot.com/-6zFus2bm12c/YHRnbw59yJI/AAAAAAAAACo/q5VLGkLqB-wW08Zc15ucdZtl-iDgboAQwCK4BGAYYCw/s286/tv24logo2.png";
  return (
    <Container style={{ display: "flex", flexWrap: "wrap" }}>
      {loading && (
        <img
          src={Spinner}
          alt="loading"
          style={{
            top: "50%",
            left: "50%",
            position: "relative",
          }}
        />
      )}
      {articles.map((element) => {
        return (
          <NewsItemCard
            key={element.url}
            title={element.title ? element.title.slice(0, 70) : " "}
            description={
              element.description ? element.description.slice(0, 88) : " "
            }
            date={element.publishedAt.slice(0, 10)}
            author={element.author ? element.author.charAt(0) : "24"}
            url={element.url}
            urlToImage={
              element.urlToImage ? (
                element.urlToImage
              ) : (
                <img src={{ tv24ImageUrl }} alt="" />
              )
            }
            content={element.content}
          />
        );
      })}
    </Container>
  );
};

export default News;
