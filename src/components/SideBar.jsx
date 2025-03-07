import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 pr-14 shadow-2xl w-72 h-scren">
      <div className="m-2 flex flex-col">
        <ul>
          <li>
            <span>🏠</span>
            <span>Home</span>
          </li>
          <li>
            <span>🥃</span>
            <span>Shorts</span>
          </li>
          <li>
            <span>🛎</span>
            <span>Subscriptions</span>
          </li>
        </ul>
      </div>
      <div className="border-gray-500 h-2" />
      <div className="m-2 border-t-2">
        <h1 className="p-1 font-bold">
          You <span>{">"}</span>
        </h1>
        <ul className="ml-2">
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Your Courses</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Your Clips</li>
        </ul>
      </div>

      <div className="m-2 border-t-2 pt-2">
        <h1 className="p-2 font-bold">Subscriptions</h1>
        <ul className="ml-2">
          <li>GtxPreet</li>
          <li>Marvel HQ</li>
          <li>lOFI Everyday</li>
          <li>Potato</li>
          <li>Avatar Lengends</li>
          <li>Show More 🔽</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
