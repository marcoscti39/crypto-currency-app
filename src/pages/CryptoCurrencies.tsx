import React from "react";
import { useSelector } from "react-redux";
import CurrencyCard from "../components/CurrencyCard";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import { RootState } from "../redux/store";

const CryptoCurrencies = () => {
  const cryptosData = useSelector(
    (state: RootState) => state.coinsAndStats.coins
  );
  return (
    <>
      <SideNav />
      <section className="lg:ml-sideBarWidth p-4">
        <h2 className="text-2xl font-semibold mb-4">All Cryptos</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,380px))] gap-4 justify-center">
          {cryptosData?.map((crypto, index) => (
            <CurrencyCard key={index} {...crypto} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CryptoCurrencies;
