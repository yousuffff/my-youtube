import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { YOUTUBE_SUGGESTIONS_API } from "../Constant";
import { cacheResult } from "../utils/searchSlice";
import { motion, AnimatePresence } from "framer-motion";

const Head = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  // console.log(searchQuery);
  const searchCache = useSelector((store) => store.search);

  //debouncing the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery === "") return; // if search query is empty, do not fetch suggestions
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        searchQueryHandle();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // show selected suggestion in input
  };

  const searchQueryHandle = async () => {
    try {
      const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
      const data = await response.json();
      // console.log(data[1]);
      setSearchResults(data[1]);
      dispatch(cacheResult({ [searchQuery]: data[1] }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex  p-2 mx-2 shadow-lg  ">
      <div className="flex grow-1 ">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-8 mx-4 cursor-pointer"
          alt="hamburger-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <NavLink to="/">
          <img
            className="h-8"
            alt="youtube-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </NavLink>
      </div>
      <div className="flex flex-row justify-center items-baseline grow-8 relative">
        <div className="flex grow-6">
          <form
            className=" w-full text-center"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search/${searchQuery}`);
              setShowSuggestions(false);
            }}
          >
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              className="border border-gray-400 rounded-l-2xl w-1/2 p-1 px-5 autofill:disabled"
            />
            <Link to={`/search/${searchQuery}`}>
              <button
                className="border border-gray-400 rounded-r-2xl p-1 hover:cursor-pointer bg-gray-400 hover:transform(2)"
                type="button"
              >
                Search
              </button>
            </Link>
          </form>
          {/* {showSuggestions && (
            <div className="place-items-center absolute  top-10 w-1/2 mx-20">
              <ul className=" bg-white w-2/3 border border-gray-400 rounded-lg">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="p-2 border-b border-gray-400 cursor-pointer hover:bg-gray-400 hover:text-white"
                  >
                    <Link onMouseDown={() => handleSuggestionClick(result)}>
                      {result}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-10 w-1/2 mx-20 z-10 left-32"
              >
                <ul className=" w-2/3 border border-gray-400 rounded-lg backdrop-blur-md bg-white/80 ">
                  {searchResults.map((result, index) => (
                    <Link
                      to={`/search/${result}`}
                      onMouseDown={() => handleSuggestionClick(result)}
                      key={index}
                    >
                      <li
                        key={index}
                        className="p-2 border-b border-gray-400 cursor-pointer hover:bg-gray-400 hover:text-white"
                      >
                        {result}
                      </li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-grow-4">
          <span className="bg-gray-400 p-2 rounded-4xl border-gray-700 mx-2">
            <i className="fa-solid fa-microphone fa-xl text-amber-50 cursor-pointer"></i>
          </span>
        </div>
      </div>

      <div className="grow-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
