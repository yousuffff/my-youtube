import React, { use, useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    dispatch(openMenu());
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos) return <h1>No data found</h1>;

  return (
    <div className="flex flex-wrap mx-auto gap-2">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
