import millify from "millify";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SectionCryptoStats = () => {
  const cryptoStats = useSelector(
    (state: RootState) => state.coinsAndStats.stats
  );
  return (
    <section className="lg:ml-sideBarWidth p-4">
      <h2 className="text-2xl font-semibold mb-4">Global Crypto Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-zinc-800">Total CryptoCurrencies</span>
          <span className="text-2xl text-black">{cryptoStats?.total}</span>
        </div>
        <div className="flex flex-col gap-2 text-end md:text-start">
          <span className="text-zinc-800">Total Market Cap</span>
          <span className="text-2xl text-black">
            {millify(Number(cryptoStats?.totalMarketCap))}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-zinc-800">Total CryptoCurrencies</span>
          <span className="text-2xl text-black">{cryptoStats?.total}</span>
        </div>
        <div className="flex flex-col gap-2 text-end md:text-start">
          <span className="text-zinc-800">Total Exchanges</span>
          <span className="text-2xl text-black">
            {cryptoStats?.totalExchanges}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-zinc-800">Total 24h Volume</span>
          <span className="text-2xl text-black">
            {millify(Number(cryptoStats?.total24hVolume))}
          </span>
        </div>
        <div className="flex flex-col gap-2 text-end md:text-start">
          <span className="text-zinc-800">Total Markets</span>
          <span className="text-2xl text-black">
            {cryptoStats.totalMarkets}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionCryptoStats;
