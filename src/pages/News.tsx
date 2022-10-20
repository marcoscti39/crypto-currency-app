import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import NewsCard from "../components/NewsCard";
import SideNav from "../components/SideNav";
import { fetchCryptoNews } from "../redux/getNewsSlice";
import { AppDispatch, RootState } from "../redux/store";

const News = () => {
  const cryptoNewsData = useSelector(
    (state: RootState) => state.criptoNews.news
  );
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    if (cryptoNewsData.length === 0) {
      dispatch(fetchCryptoNews());
    }
  }, []);
  return (
    <>
      <ScrollRestoration />

      <SideNav />
      <section className="lg:ml-sideBarWidth p-4">
        <h2 className="text-2xl font-semibold mb-4">Crypto News</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,450px))] justify-center gap-4 mb-4">
          {cryptoNewsData.length === 0 ? (
            <LoadingSpinner />
          ) : (
            cryptoNewsData?.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
