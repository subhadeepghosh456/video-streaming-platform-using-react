import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { closeMenu, openMenu } from "../utils/appSlice";
import Suggesetion from "./Suggesetion";
import Comments from "./Comments";

const WatchPage2 = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  });

  console.log(location.state);



  const { snippet } = location.state;
  
  const { title,channelTitle} = snippet;

  const [params] = useSearchParams();
  
  return (
    <div className="ml-2 flex gap-5">
      <div key={"1"} className="flex flex-col gap-5">
        <iframe
          className="rounded-lg bg-slate-400"
          width="1180"
          height="620"
          alt="image"
          src={
            "https://www.youtube.com/embed/" +
            params.get("v") +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
        <div key={"2"} className="w-[1180px] bg-slate-200 rounded-lg py-5 px-3">
          <h1 key={"3"} className="flex text-xl">{channelTitle}</h1>
          <div key={"4"} className="text-2xl font-bold">Title: {title}</div>
        </div>
       <Comments />
      </div>
      <Suggesetion />
    </div>
  );
};

export default WatchPage2;
