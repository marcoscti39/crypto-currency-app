import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import CurrencyCard from "./CurrencyCard";

const Section10CryptosRank = () => {
  const cryptosRankData = useSelector(
    (state: RootState) => state.coinsAndStats.coins
  )?.slice(0, 10);
  return (
    <section className="lg:ml-sideBarWidth p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold mb-4">
          Top 10 Cryptos In The World
        </h2>
        <Link to="/cryptoCurrencies" className="text-desaturatedGreen">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,380px))] gap-4 justify-center mb-4">
        {cryptosRankData?.map((crypto, index) => (
          <CurrencyCard key={index} {...crypto} />
        ))}
      </div>
    </section>
  );
};

export default Section10CryptosRank;
