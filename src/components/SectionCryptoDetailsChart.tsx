import React from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import millify from "millify";
import { fetchCoinPriceHistory } from "../redux/getCoinPriceHistory";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const SectionCryptoDetailsChart = () => {
  const coinDetailsData = useSelector(
    (state: RootState) => state.coinDetails.coinData
  );

  const dispatch = useDispatch<AppDispatch>();

  const priceCoinHistory = useSelector(
    (state: RootState) => state.coinPriceHistory.data
  );

  const labels = priceCoinHistory?.map((time) =>
    moment.unix(Number(time.timestamp)).format("L")
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${coinDetailsData?.name}`,
        backgroundColor: "rgb(117, 255, 99)",
        borderColor: "#7EAC49",
        data: priceCoinHistory.map((price) => price.price),
      },
    ],
  };

  const changeCoinPriceHistoryTime = (timeSelected: EventTarget) => {
    dispatch(fetchCoinPriceHistory((timeSelected as HTMLOptionElement).value));
  };
  return (
    <section className="lg:col-span-2 hidden lg:block">
      <select
        onClick={(e) => changeCoinPriceHistoryTime(e.target)}
        className="bg-white w-full max-w-[200px] py-2 border-[2px] border-lightGreen my-4 cursor-pointer rounded"
      >
        <option value="3h">3 hours</option>
        <option value="24h">24 hours</option>
        <option value="7d">7 days</option>
        <option value="30d">30 days</option>
        <option value="3m">3 months</option>
        <option value="1y">1 year</option>
        <option value="3h">3 years</option>
        <option value="5h">5 years</option>
      </select>

      <article className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lightGreen text-2xl">
            {coinDetailsData?.name} Price Chart
          </h2>
          <div className="flex gap-4">
            <strong>Change: {coinDetailsData?.change}%</strong>

            <strong>
              current {coinDetailsData?.name} Price: ${" "}
              {millify(Number(coinDetailsData?.price))}
            </strong>
          </div>
        </div>
        <div className="w-full">
          <Line data={data} options={options} />
        </div>
      </article>
    </section>
  );
};

export default SectionCryptoDetailsChart;
