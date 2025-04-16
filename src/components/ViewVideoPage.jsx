import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";

const ViewVideoPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const param = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="m-5 w-full">
      <div className=" flex">
        <div className="mb-5">
          <iframe
            width="1200"
            height="720"
            src={"https://www.youtube.com/embed/" + param}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl"
          ></iframe>
        </div>
        <div className="mx-4 w-full">
          <LiveChatContainer />
        </div>
      </div>
      <div className="w-4/6">
        <CommentContainer />
      </div>
    </div>
  );
};

export default ViewVideoPage;
