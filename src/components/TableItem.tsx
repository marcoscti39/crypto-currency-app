import millify from "millify";
import React from "react";
import { CoinsTypes } from "../redux/getCoinsSlice";
const TableItem: React.FC<CoinsTypes> = ({
  iconUrl,
  name,
  "24hVolume": volume,
  marketCap,
  change,
  rank,
}) => {
  const [isHiddenTextShowing, setIsHiddenTextShowing] = React.useState(false);
  const toggleHiddenText = () => {
    setIsHiddenTextShowing(!isHiddenTextShowing);
  };
  return (
    <div
      onClick={toggleHiddenText}
      className="flex flex-col border-b-[1px] border-slate-800 cursor-pointer"
    >
      <div className="flex">
        <div className="flex flex-1 py-4 gap-1 bg-gray-100 items-center">
          <span className="ml-1 md:ml-2">{rank}.</span>
          <img
            src={iconUrl}
            alt=""
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%] object-cover"
          />
          <span>{name}</span>
        </div>
        <div className="flex items-center flex-1 py-4 bg-gray-100 justify-center lg:justify-start">
          {millify(Number(volume))}
        </div>
        <div className="flex items-center flex-1 py-4 bg-gray-100 justify-center lg:justify-start">
          {millify(Number(marketCap))}
        </div>
        <div className="hidden md:flex items-center flex-1 py-4 bg-gray-100">
          {change}%
        </div>
      </div>
      <p
        className={`w-full bg-white  overflow-hidden origin-top transition ${
          isHiddenTextShowing
            ? "py-4 px-3 scale-y-100"
            : "scale-y-0 py-0 px-0 h-0"
        }`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nemo,
        nisi in repellendus quisquam itaque doloribus dolorum magnam nam, quasi
        temporibus, iure vero repellat? Facilis cupiditate libero in aspernatur
        nulla.
      </p>
    </div>
  );
};

export default TableItem;
