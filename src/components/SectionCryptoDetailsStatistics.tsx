import React from "react";
import { TableInfo } from "./CryptoDetailTableInfo";

import { BiHash as RankIcon } from "react-icons/bi";
import { BsLightningCharge as VolumeIcon } from "react-icons/bs";
import { FaTrophy as TrophyIcon } from "react-icons/fa";
import { RiMoneyDollarCircleLine as MoneyIcon } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import millify from "millify";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../redux/getCoinDetailsSlice";

const SectionCryptoDetailsStatistics = () => {
  const coinDetailsStatistics = useSelector(
    (state: RootState) => state.coinDetails.coinData
  );

  return (
    <section>
      <h2 className="font-semibold text-lightGreen text-2xl my-4">
        {coinDetailsStatistics?.name} Value Statistics
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius fugiat
        beatae modi quibusdam error expedita vitae recusandae soluta quas
      </p>

      <TableInfo.Root>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <MoneyIcon className="text-2xl" />
            <span>Price USD</span>
          </div>
          <span className="font-semibold">
            $ {millify(Number(coinDetailsStatistics?.price))}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <RankIcon className="text-2xl" />
            <span>Rank</span>
          </div>
          <span className="font-semibold">{coinDetailsStatistics?.rank}</span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <VolumeIcon className="text-2xl" />
            <span>24h Volume</span>
          </div>
          <span className="font-semibold">
            $ {millify(Number(coinDetailsStatistics?.["24hVolume"]))}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <MoneyIcon className="text-2xl" />
            <span>Market Cap</span>
          </div>
          <span className="font-semibold">
            $ {millify(Number(coinDetailsStatistics?.marketCap))}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <TrophyIcon className="text-2xl" />
            <span>All-time-high (daily avg)</span>
          </div>
          <span className="font-semibold">
            $ {millify(Number(coinDetailsStatistics?.allTimeHigh?.price))}
          </span>
        </TableInfo.TableItem>
      </TableInfo.Root>
    </section>
  );
};

export default SectionCryptoDetailsStatistics;
