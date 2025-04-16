import React from "react";

const VideoCard = ({ info }) => {
  function formatViews(views) {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(views);
  }

  if (!info) {
    return <div>Loading...</div>;
  }
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  if (!title || !thumbnails || !channelTitle) {
    return <div>Invalid video data</div>;
  }

  return (
    <div className="p-2 m-2 shadow-2xl w-80 rounded-xl h-80">
      <img src={thumbnails.medium.url} alt={title} className="rounded-2xl" />
      <div className="p-2 ml-1">
        <h3 className="text-ellipsis">{title}</h3>
        <p className="text-ellipsis">{channelTitle}</p>
        <p className="">{formatViews(statistics.viewCount)} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
