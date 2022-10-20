import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseUrl, options } from "../API/cryptoAPI/apiConfig";

export interface StatsTypes {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface CoinsTypes {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinRankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
}

interface fetchCoinsResponseType {
  status: string;
  data: {
    stats: StatsTypes;
    coins: CoinsTypes[];
  };
}

const initialState = {
  stats: {} as StatsTypes,
  coins: [] as CoinsTypes[],
  isLoading: true,
};

export const fetchCoins = createAsyncThunk(
  "coinsAndStats/fetchCoins",
  async () => {
    const response = await fetch(
      `${baseUrl}/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`,
      options
    );

    const data: fetchCoinsResponseType = await response.json();
    return data;
  }
);

const getCoinsSlice = createSlice({
  name: "coinsAndStats",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCoins.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCoins.fulfilled,
      (state, action: PayloadAction<fetchCoinsResponseType>) => {
        state.isLoading = false;
        state.stats = action.payload.data.stats;
        state.coins = action.payload.data.coins;
      }
    );
  },
});

export default getCoinsSlice.reducer;
