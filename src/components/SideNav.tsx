import React from "react";

import criptoImg from "../../public/images/cryptoImg.png";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { BsCurrencyBitcoin as CurrenciesIcon } from "react-icons/bs";
import { BsCurrencyExchange as ExchangesIcon } from "react-icons/bs";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { FaRegNewspaper as NewsIcon } from "react-icons/fa";
import { RiCloseFill as CloseIcon } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.querySelector<HTMLBodyElement>("body")!.style.overflowY =
        "hidden";
      return;
    }
    document.querySelector<HTMLBodyElement>("body")!.style.overflowY = "scroll";
  }, [isMobileMenuOpen]);
  return (
    <aside className="flex flex-col justify-center h-20 lg:justify-start lg:min-h-screen w-full lg:w-sideBarWidth text-white lg:fixed bg-darkGreen">
      <div className="flex ml-4 lg:ml-0 items-center gap-4 lg:p-4">
        <img
          src={criptoImg}
          alt=""
          className="w-[50px] h-[50px] object-cover"
        />
        <h2 className="text-3xl font-semibold">CryptoVerse</h2>
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="text-white text-2xl" />
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen
            ? "absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)]"
            : "hidden"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <nav
        className={`${
          isMobileMenuOpen
            ? "translate-x-0 lg:translate-x-0"
            : "translate-x-[-100%] lg:translate-x-0"
        } transition fixed left-0 top-0 bottom-0 right-0 md:right-[50%] z-10 lg:block lg:relative lg:z-10 bg-darkGreen`}
      >
        <button
          className={`${
            isMobileMenuOpen ? "absolute right-4 top-4 z-10" : "hidden"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <CloseIcon className="text-4xl text-white" />
        </button>
        <ul className="flex flex-col mt-10 lg:mt-0 ">
          <li className="flex gap-4 items-center p-2 pointer transition pl-4 hover:bg-desaturatedGreen">
            <HomeIcon />
            <Link
              to="/"
              className="w-full h-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="flex gap-4 items-center p-2 pointer transition pl-4 hover:bg-desaturatedGreen">
            <CurrenciesIcon />
            <Link
              to="/cryptoCurrencies"
              className="w-full h-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CryptoCurrencies
            </Link>
          </li>
          <li className="flex gap-4 items-center p-2 pointer transition pl-4 hover:bg-desaturatedGreen">
            <ExchangesIcon />
            <Link
              to="/exchanges"
              className="w-full h-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Exchanges
            </Link>
          </li>
          <li className="flex gap-4 items-center p-2 pointer transition pl-4 hover:bg-desaturatedGreen">
            <NewsIcon />
            <Link
              to="/news"
              className="w-full h-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
