import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { closeMenu, openMenu } from "../utils/appSlice";
import Suggesetion from "./Suggesetion";
import Comments from "./Comments";

const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  });

  console.log(location.state);

  // if(location.state===null) return;

  const { snippet,statistics } = location.state;
  const { viewCount,likeCount,commentCount} = statistics;
  const { title,channelTitle} = snippet;

  const [params] = useSearchParams();
  // console.log("https://www.youtube.com/embed/" + params.get("v"));

  return (
    <div className="ml-2 flex gap-5">
      <div className="flex flex-col gap-5">
        <iframe
          className="rounded-lg bg-slate-400"
          width="1180"
          height="620"
          alt="image"
          src={
            "https://www.youtube.com/embed/" +
            params.get("v") +
            "?autoplay=1&mute=0"
          }
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay
        ></iframe>
        <div className="w-[1180px] bg-slate-200 rounded-lg py-5 px-3">
          <h1 className="flex text-xl">{channelTitle}</h1>
          <div className="text-2xl font-bold">Title: {title}</div>
          <div className="font-medium">{likeCount} Likes | {viewCount} Views | {commentCount} Comments</div>
        </div>
       <Comments />
      </div>
      <Suggesetion />
    </div>
  );
};

export default WatchPage;
