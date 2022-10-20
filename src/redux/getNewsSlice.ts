import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newsApiOptions, newsBaseUrl } from "../API/newsAPI/apiConfig";

export interface NewsTypes {
  _type: string;
  name: string;
  url: string;
  image?: {
    _type: string;
    thumbnail: {
      _type: string;
      contentUrl: string;
      width: number;
      height: number;
    };
  };
  description: string;
  provider: {
    _type: string;
    name: string;
    image?: {
      _type: string;
      thumbnail: {
        _type: string;
        contentUrl: string;
      };
    };
  }[];
  datePublished: string;
  about?: {
    _type: string;
    readLink: string;
    name: string;
  }[];
  mentions?: {
    _type: string;
    name: string;
  }[];
  category?: string;
}

interface FetchCryptoNewsResponseData {
  _type: string;
  readLink: string;
  queryContext: {
    _type: string;
    originalQuery: string;
    adultIntent: boolean;
  };
  totalEstimatedMatches: number;
  sort: {
    _type: string;
    name: string;
    id: string;
    isSelected: boolean;
    url: string;
  }[];
  value: NewsTypes[];
}

const initialState = {
  news: [] as NewsTypes[],
};

export const fetchCryptoNews = createAsyncThunk(
  "getNews/fetchCryptoNews",
  async () => {
    const response = await fetch(
      `${newsBaseUrl}/news/search?q=cryptoCurrency&count=50&freshness=Day&textFormat=Raw&safeSearch=Off`,
      newsApiOptions
    );
    const data: FetchCryptoNewsResponseData = await response.json();
    return data;
  }
);
export const newsSlice = createSlice({
  name: "getNews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchCryptoNews.fulfilled,
      (state, action: PayloadAction<FetchCryptoNewsResponseData>) => {
        state.news = action.payload.value;
      }
    );
  },
});

export default newsSlice.reducer;
