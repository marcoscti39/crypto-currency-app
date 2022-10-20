export const newsBaseUrl = "https://bing-news-search1.p.rapidapi.com";
const newsApiKey = "25a3ca9afemsh7f33bed2ab12277p195283jsn4ff872673d2e";

export const newsApiOptions = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": newsApiKey,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};
