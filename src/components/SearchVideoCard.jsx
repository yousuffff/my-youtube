import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ScrollToTop from "./ScrollToTop";

const SearchVideoCard = ({ data }) => {
  // const data = [
  //   {
  //     kind: "youtube#searchResult",
  //     etag: "7WA_hSnEqk3pRVjO8vY03UQ6bas",
  //     id: {
  //       kind: "youtube#video",
  //       videoId: "Oe61Le-kmow",
  //     },
  //     snippet: {
  //       publishedAt: "2025-04-07T11:33:57Z",
  //       channelId: "UCah9jr4Ehlrt4Wv-q-CgJkg",
  //       title:
  //         "Marvel Studios' Thunderbolts* | Official Trailer | In Cinemas May 1",
  //       description:
  //         "Their time has come ️⚡️ Marvel Studios' #Thunderbolts* only in cinemas May 1.",
  //       thumbnails: {
  //         default: {
  //           url: "https://i.ytimg.com/vi/Oe61Le-kmow/default.jpg",
  //           width: 120,
  //           height: 90,
  //         },
  //         medium: {
  //           url: "https://i.ytimg.com/vi/Oe61Le-kmow/mqdefault.jpg",
  //           width: 320,
  //           height: 180,
  //         },
  //         high: {
  //           url: "https://i.ytimg.com/vi/Oe61Le-kmow/hqdefault.jpg",
  //           width: 480,
  //           height: 360,
  //         },
  //       },
  //       channelTitle: "IndiaMarvel",
  //       liveBroadcastContent: "none",
  //       publishTime: "2025-04-07T11:33:57Z",
  //     },
  //   },
  // ];
  console.log(data);
  return (
    <>
      <Link to={"/watch?v=" + data.id.videoId} key={data.id.videoId}>
        <div className="flex h-44 m-2 p-2">
          <div className="mx-2 h-10 w-80">
            <img
              src={data.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="rounded-lg object-contain"
            />
          </div>
          <div>
            <p>{data.snippet.title}</p>
            <p className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(data.snippet.publishedAt), {
                addSuffix: true,
              })}
            </p>
            <p>{data.snippet.channelTitle}</p>
            <p>{data.snippet.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchVideoCard;
