const GOOGLE_API_KEY = "AIzaSyAfUDP6mxoeTOJAN4GpSEDRkd-OQBWnuZc";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";


export const YOUTUBE_SEARCH_API = 
'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key='+GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 100;
