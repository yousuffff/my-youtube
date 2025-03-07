import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;
  }
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  if (!title || !thumbnails || !channelTitle) {
    return <div>Invalid video data</div>;
  }

  return (
    <div className="p-2 m-2 shadow-2xl w-72 rounded-xl">
      <img src={thumbnails.medium.url} alt={title} className="rounded-2xl" />
      <div className="p-2 ml-1">
        <h3 className="text-ellipsis">{title}</h3>
        <p className="text-ellipsis">{channelTitle}</p>
        <p className="">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
