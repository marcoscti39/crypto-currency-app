import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseUrl, options } from "../API/cryptoAPI/apiConfig";

export interface CoinPriceHistoryTypes {
  price: string;
  timestamp: number;
}
interface CoinPriceHistoryResponseTypes {
  status: string;
  data: {
    change: string;
    history: CoinPriceHistoryTypes[];
  };
}

type timeSeletedTypes = "3h" | "24h" | "7d" | "30d" | "3m" | "1y" | "3y" | "5y";

const initialState = {
  data: [] as CoinPriceHistoryTypes[],
  timeSelected: "3h" as timeSeletedTypes,
};

export const fetchCoinPriceHistory = createAsyncThunk(
  "coinPriceHistory/fetchCoinPriceHistory",
  async (timeSelected: string = "3h") => {
    const response = await fetch(
      `${baseUrl}/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeSelected}`,
      options
    );
    const data: CoinPriceHistoryResponseTypes = await response.json();
    return data;
  }
);

export const getCoinPriceHistorySlice = createSlice({
  name: "coinPriceHistory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchCoinPriceHistory.fulfilled,
      (state, action: PayloadAction<CoinPriceHistoryResponseTypes>) => {
        state.data = action.payload.data.history;
      }
    );
  },
});

export default getCoinPriceHistorySlice.reducer;
