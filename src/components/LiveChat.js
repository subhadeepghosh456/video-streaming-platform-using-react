import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "./helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  

  const Chat_Messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomString(50),
        })
      );
    }, 200);

    return () => {
      clearInterval(i);
    };
  }, []);



  return (
    <div className="flex flex-col mr-4 w-full  ">
      <div className="w-full h-[620px] border px-3  rounded-xl bg-slate-100 border-black overflow-y-scroll flex flex-col-reverse ">
        {Chat_Messages.map((c, index) => {
          return <ChatMessage key={index} name={c.name} message={c.message} />;
        })}
      </div>
      <form
        className="w-full flex border border-black rounded-lg mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessages({
            name:"Subhadeep Ghosh",
            message:message
          }))

          setMessage("");
        }}
      >
        <input
          className="w-full border px-2 py-4"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="px-2 bg-green-500">SEND</button>
      </form>
    </div>
  );
};

export default LiveChat;
