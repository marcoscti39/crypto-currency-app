import React from "react";

import { RiExchangeCnyFill as ExchangeIcon } from "react-icons/ri";

import {
  AiOutlineLineChart as ChartIcon,
  AiOutlineExclamationCircle as GenericIcon,
} from "react-icons/ai";
import { BsCheck as CheckIcon } from "react-icons/bs";
import { ImCross as CrossIcon } from "react-icons/im";
import { TableInfo } from "./CryptoDetailTableInfo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import millify from "millify";

const SectionCryptoDetailsOtherStats = () => {
  const coinDetailsOtherStats = useSelector(
    (state: RootState) => state.coinDetails.coinData
  );
  return (
    <section>
      <h2 className="font-semibold text-lightGreen text-2xl my-4">
        Other Stats Info
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        beatae quo, aperiam explicabo
      </p>

      <TableInfo.Root>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <ChartIcon className="text-2xl" />
            <span>Number of Markets</span>
          </div>
          <span className="font-semibold">
            {coinDetailsOtherStats?.numberOfMarkets}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <ExchangeIcon className="text-2xl" />
            <span>Number of Exchanges</span>
          </div>
          <span className="font-semibold">
            {coinDetailsOtherStats?.numberOfExchanges}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <GenericIcon className="text-2xl" />
            <span>Aproved Supply</span>
          </div>
          <span className="text-2xl flex justify-center items-center">
            {coinDetailsOtherStats?.supply?.confirmed ? (
              <CheckIcon />
            ) : (
              <CrossIcon />
            )}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <GenericIcon className="text-2xl" />
            <span>Total Supply</span>
          </div>
          <span className="font-semibold">
            $ {millify(Number(coinDetailsOtherStats?.supply?.total))}
          </span>
        </TableInfo.TableItem>
        <TableInfo.TableItem>
          <div className="flex gap-2 items-center text-slate-600">
            <GenericIcon className="text-2xl" />
            <span>Circulating Supply</span>
          </div>
          <span className="font-semibold">
            $ {millify(Number(coinDetailsOtherStats?.supply?.circulating))}
          </span>
        </TableInfo.TableItem>
      </TableInfo.Root>
    </section>
  );
};

export default SectionCryptoDetailsOtherStats;
