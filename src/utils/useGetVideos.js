import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const UseGetVideos = () => {
  const [videos, setVideos] = useState([]);

  // 
  useEffect(() => {
    getVideos();
  }, []);
  const searchItem = useSelector((store) => store.searchApi);

  if(searchItem==="") return null;

  if(videos.length===0) return null;

  const { items } = searchItem;
  console.log(items);
  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${items}&key=AIzaSyAfUDP6mxoeTOJAN4GpSEDRkd-OQBWnuZc`
    );
    const json = await data.json();



    setVideos(json.items);
    
  };

  return videos;
};

export default UseGetVideos;
