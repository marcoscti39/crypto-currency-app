import React from "react";

import SectionCryptoDetailsStatistics from "../components/SectionCryptoDetailsStatistics";
import SectionCryptoDetailsOtherStats from "../components/SectionCryptoDetailsOtherStats";
import SectionCryptoDetailsCoinLinks from "../components/SectionCryptoDetailsCoinLinks";
import SectionCryptoDetailsChart from "../components/SectionCryptoDetailsChart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import SectionCryptoDetailsDescription from "../components/SectionCryptoDetailsDescription";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchCoinDetails } from "../redux/getCoinDetailsSlice";
import { fetchCoinPriceHistory } from "../redux/getCoinPriceHistory";
import { ScrollRestoration, useParams } from "react-router-dom";

const CryptoDetail = () => {
  const coinDetailsData = useSelector(
    (state: RootState) => state.coinDetails.coinData
  );
  const isLoading = useSelector(
    (state: RootState) => state.coinDetails.isLoading
  );

  const dispatch = useDispatch<AppDispatch>();

  const { coinId } = useParams();

  React.useEffect(() => {
    dispatch(fetchCoinDetails(coinId!));
    dispatch(fetchCoinPriceHistory());
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <SideNav />
          <LoadingSpinner />
          <Footer />
        </>
      ) : (
        <>
          <ScrollRestoration />

          <SideNav />
          <main className="grid grid-cols-[1fr] lg:grid-cols-2 gap-8 lg:ml-sideBarWidth p-4 mb-8">
            <div className="lg:col-span-2 ">
              <h1 className="font-semibold text-lightGreen text-2xl my-4 text-center">
                {coinDetailsData?.name} ({coinDetailsData?.symbol}) Price
              </h1>
              <p className="text-center pb-5 border-b-slate-600 border-b-[1px]">
                {coinDetailsData?.name} Live price in US Dollar (USD), View
                Statistics market cap and supply
              </p>
            </div>

            <SectionCryptoDetailsChart />
            <SectionCryptoDetailsStatistics />
            <SectionCryptoDetailsOtherStats />
            <SectionCryptoDetailsDescription />
            <SectionCryptoDetailsCoinLinks />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default CryptoDetail;
