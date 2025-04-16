import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../Constant";
import SearchVideoCard from "./SearchVideoCard";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchVideoPage = () => {
  const { param } = useParams();
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const dispatch = useDispatch();
  console.log(searchData);

  useEffect(() => {
    dispatch(openMenu());
    fetchSearchResults(false);
  }, [param]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (scrollBottom && !loading && nextPageToken) {
        fetchSearchResults(true); // load more
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, nextPageToken]);

  const fetchSearchResults = async (loadMore = false) => {
    setLoading(true);
    try {
      const pageToken =
        loadMore && nextPageToken ? `&pageToken=${nextPageToken}` : "";
      const json = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q={${param}}&type=video&key=${API_KEY}${pageToken}`
      );
      const data = await json.json();
      // console.log(data.items);
      setSearchData((prev) =>
        loadMore ? [...prev, ...data.items] : data.items
      );
      setNextPageToken(data.nextPageToken || null);
    } catch (error) {
      setLoading(true);
      console.log("fetch error : ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col w-full h-full">
      <Buttons />
      {/* {!loading && (
        <div className="w-3/4 mx-auto">
          {/* <h2>{param}</h2> */}
      {/* {searchData.length === 0 && <h2>No results found</h2>}
          {searchData.map((data) => (
            <SearchVideoCard data={data} />
          ))}
        </div>
      )} */}
      <div className="w-3/4 mx-auto mt-4">
        {searchData.length === 0 && !loading && <h2>No results found</h2>}
        {searchData.map((data, index) => (
          <SearchVideoCard key={index} data={data} />
        ))}
        {loading && <p className="text-center my-4">Loading more...</p>}
      </div>
    </div>
  );
};

export default SearchVideoPage;
