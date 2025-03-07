import React from "react";
import Button from "./Button";

const Buttons = () => {
  const list = [
    "All",
    "Music",
    "Mixes",
    "Gaming",
    "Live",
    "Web Development",
    "Computer Programming",
    "Playlists",
    "PodCast",
    "Dark Ambient",
    "Ghazal",
    "Display Device",
    "Intersteller",
    "Dua ",
  ];
  return (
    <div className="mt-2 flex flex-nowrap">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default Buttons;
