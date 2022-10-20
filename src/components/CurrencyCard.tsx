import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { CoinsTypes } from "../redux/getCoinsSlice";

const CurrencyCard: React.FC<CoinsTypes> = ({
  name,
  iconUrl,
  rank,
  price,
  marketCap,
  change,
  uuid,
}) => {
  return (
    <Link to={`/coin-details/${uuid}`}>
      <article className="bg-white text-zinc-700 rounded">
        <header className="flex p-4 justify-between border-b-[1px] border-zinc-300 items-center">
          <span className="font-semibold text-black text-lg">
            {rank}. {name}
          </span>
          <img
            src={iconUrl}
            alt=""
            className="object-cover w-[40px] h-[40px] rounded-[50%]"
          />
        </header>
        <div className="flex flex-col gap-4 p-4">
          <span> Price: {millify(Number(price))}</span>
          <span> Market Cap: {millify(Number(marketCap))}</span>
          <span> Daily Change: {change}</span>
        </div>
      </article>
    </Link>
  );
};

export default CurrencyCard;
