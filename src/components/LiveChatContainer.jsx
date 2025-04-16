import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateName, { stringGenerator } from "../helper";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessages, setLiveMessage] = useState("");

  useEffect(() => {
    //api polling for new comment
    const i = setInterval(() => {
      // console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateName(),
          text: stringGenerator(20),
        })
      );
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full border border-black h-[720px] rounded-lg ">
        <div className=" sticky top-0 z-10  border-b-2 mb-2 pl-5 bg-white w-full rounded-t-lg">
          <h1 className="text-2xl font-bold p-2  ">Live Chat</h1>
        </div>
        <div className="flex h-[620px] flex-col-reverse overflow-y-scroll overflow-x-hidden ">
          <div className="m-2 flex flex-col-reverse ">
            {chatMessages.map((message) => (
              <ChatMessage name={message.name} text={message.text} />
            ))}
          </div>
        </div>
        <form
          className="flex justify-around m-auto"
          onSubmit={(e) => {
            e.preventDefault();
            if (liveMessages === "") return;
            dispatch(
              addMessage({
                name: "Yousuf",
                text: liveMessages,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            type="text"
            className="border-2 rounded-2xl px-4 w-lg"
            placeholder="Enter your message"
            value={liveMessages}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="p-1 px-3 border-2 rounded-lg cursor-pointer bg-green-200 hover:bg-green-400">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChatContainer;
