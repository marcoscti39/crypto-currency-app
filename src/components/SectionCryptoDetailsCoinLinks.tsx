import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TableInfo } from "./CryptoDetailTableInfo";

const SectionCryptoDetailsCoinLinks = () => {
  const coinDetailsLinks = useSelector(
    (state: RootState) => state.coinDetails.coinData
  );
  return (
    <section>
      <h2 className="font-semibold text-lightGreen text-2xl my-4">
        BitCoin Info
      </h2>
      <TableInfo.Root>
        {coinDetailsLinks?.links?.map((link, index) => (
          <TableInfo.TableItem key={index}>
            <span className="font-semibold">{link?.type}</span>
            <a
              href={link?.url}
              target="_blank"
              className="text-lightGreen font-bold"
            >
              {link?.name}
            </a>
          </TableInfo.TableItem>
        ))}
      </TableInfo.Root>
    </section>
  );
};

export default SectionCryptoDetailsCoinLinks;
