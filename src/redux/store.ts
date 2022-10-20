import { configureStore } from "@reduxjs/toolkit";
import getCoinsAndStats from "./getCoinsSlice";
import getCryptoNews from "./getNewsSlice";
import getCoinDetails from "./getCoinDetailsSlice";
import getCoinPriceHistory from "./getCoinPriceHistory";

export const store = configureStore({
  reducer: {
    coinsAndStats: getCoinsAndStats,
    criptoNews: getCryptoNews,
    coinDetails: getCoinDetails,
    coinPriceHistory: getCoinPriceHistory,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
