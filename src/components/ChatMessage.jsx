import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div
      className="flex border-b-1 m-1 py-1
     "
    >
      <img
        className="h-8 rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user-icon"
      />
      <div className="flex items-center">
        <p className="font-bold mx-2">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
