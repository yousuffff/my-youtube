import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
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
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
