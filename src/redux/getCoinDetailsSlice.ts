import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseUrl, options } from "../API/cryptoAPI/apiConfig";
import { CoinsTypes } from "./getCoinsSlice";

export interface CoinDetailsTypes extends CoinsTypes {
  numberOfMarkets: number;
  numberOfExchanges: number;
  description: string;
  supply: {
    confirmed: boolean;
    supplyAt: number;
    max: string;
    total: string;
    circulating: string;
  };
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  links: [
    {
      name: string;
      type: string;
      url: string;
    }
  ];
}

export interface CoinDetailsResponseTypes {
  status: string;
  data: {
    coin: CoinDetailsTypes;
  };
}

const initialState = {
  coinData: {} as CoinDetailsTypes,
  isLoading: true,
};

export const fetchCoinDetails = createAsyncThunk(
  "coinDetails/fetchCoinDetails",
  async (coinId: string) => {
    const response = await fetch(
      `${baseUrl}/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
      options
    );
    const data: CoinDetailsResponseTypes = await response.json();
    return data;
  }
);

export const coinDetailsSlice = createSlice({
  name: "coinDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCoinDetails.pending, (state) => {
      console.log("pending");
      state.isLoading = true;
    });
    builder.addCase(
      fetchCoinDetails.fulfilled,
      (state, action: PayloadAction<CoinDetailsResponseTypes>) => {
        console.log("oi");
        state.isLoading = false;
        state.coinData = action.payload.data.coin;
      }
    );
  },
});

export default coinDetailsSlice.reducer;
