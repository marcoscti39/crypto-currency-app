import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import Section10CryptosRank from "../components/Section10CryptosRank";
import SectionCryptoNews from "../components/SectionCryptoNews";
import SectionCryptoStats from "../components/SectionCryptoStats";
import SideNav from "../components/SideNav";
import { fetchCoins } from "../redux/getCoinsSlice";
import { fetchCryptoNews } from "../redux/getNewsSlice";
import { AppDispatch, RootState } from "../redux/store";

const Home = () => {
  const coinsData = useSelector(
    (state: RootState) => state.coinsAndStats.coins
  );
  const isLoadding = useSelector(
    (state: RootState) => state.coinsAndStats.isLoading
  );
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    if (coinsData.length === 0) {
      dispatch(fetchCoins());
      dispatch(fetchCryptoNews());
    }
  }, []);
  return (
    <>
      {isLoadding ? (
        <LoadingSpinner />
      ) : (
        <>
          <ScrollRestoration />

          <SideNav />
          <SectionCryptoStats />
          <Section10CryptosRank />
          <SectionCryptoNews />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
