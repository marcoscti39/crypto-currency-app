import React from "react";
import { useSelector } from "react-redux";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import TableItem from "../components/TableItem";
import { RootState } from "../redux/store";

const Exchange = () => {
  const coinsData = useSelector(
    (state: RootState) => state.coinsAndStats.coins
  );
  return (
    <>
      <ScrollRestoration />
      <SideNav />
      <section className="lg:ml-sideBarWidth">
        <div className="w-full">
          <div className="flex bg-darkGreen text-white py-4">
            <div className="flex-1 text-start">
              {" "}
              <span className="ml-2">Exchanges</span>
            </div>
            <div className="flex-1 text-center lg:text-start">
              24h Trade Volume
            </div>
            <div className="flex-1 text-center lg:test-start">Markets</div>
            <div className="flex-1 text-start hidden md:flex">Change</div>
          </div>
          <div>
            {coinsData &&
              coinsData.map((coin, index) => (
                <TableItem key={index} {...coin} />
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Exchange;
