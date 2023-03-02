import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import SuggestionShrimmer from "./SuggestionShrimmer";

const Suggesetion = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);

    // console.log(json.items);
  };
  return (
    <div className="flex w-[480px] flex-col gap-6">
      {videos.length === 0 ? (
        <SuggestionShrimmer />
      ) : (
        videos.map((video) => {
          return (
            <Link key={video.id} state={video} to={"?v=" + video.id}>
              <SuggestionCard info={video} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Suggesetion;
