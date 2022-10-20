import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import NewsCard from "./NewsCard";

const SectionCryptoNews = () => {
  const sixCryptoNews = useSelector(
    (state: RootState) => state.criptoNews.news
  );
  return (
    <section className="lg:ml-sideBarWidth p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold mb-4">Latest Crypto News</h2>
        <Link to="/news" className="text-desaturatedGreen grid grid-cols-1">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,450px))] justify-center gap-4 mb-4">
        {sixCryptoNews.length > 5 &&
          sixCryptoNews
            ?.slice(0, 6)
            ?.map((news, index) => <NewsCard key={index} {...news} />)}
      </div>
    </section>
  );
};

export default SectionCryptoNews;
