import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shrimmer from "./Shrimmer";
import { useSelector } from "react-redux";
import SearchedVideoCard from "./SearchedVideoCard";

const VideoContainer = () => {
  const { isSearched, searchQuery } = useSelector((store) => store.searchApi);
  const [called, setCalled] = useState(false);
  console.log(searchQuery);
  const [videos, setVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    isSearched === true ? getSearchVideos() : getVideos();
  }, [searchQuery]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();

      setVideos(json.items);
      // console.log(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=AIzaSyAfUDP6mxoeTOJAN4GpSEDRkd-OQBWnuZc`
    );
    const json = await data.json();

    console.log(json.items);
    setCalled(true);
    setSearchVideos(json.items);
  };

  if (called) {
    return (
      <div className="ml-2 gap-4 flex flex-wrap ">
        {searchVideos.length === 0 ? (
          <Shrimmer />
        ) : (
          searchVideos.map((video) => {
            return (
              <Link key={video.id.videoId} state={video} to={"watch2?v=" + video.id.videoId}>
                <SearchedVideoCard info={video} />
              </Link>
            );
          })
        )}
      </div>
    );
  }

  return (
    <div className="ml-2 gap-4 flex flex-wrap ">
      {videos.length === 0 ? (
        <Shrimmer />
      ) : (
        videos.map((video) => {
          return (
            <Link key={video.id} state={video} to={"watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default VideoContainer;
