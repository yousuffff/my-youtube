export const API_KEY = "AIzaSyB9xXxAFYYgVOsJiPTv-Sv20cLWjh6RUEM";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=GB&key=" +
  API_KEY;
export const YOUTUBE_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q={${keyword}}&type=video&key=AIzaSyB9xXxAFYYgVOsJiPTv-Sv20cLWjh6RUEM" +
  API_KEY;
