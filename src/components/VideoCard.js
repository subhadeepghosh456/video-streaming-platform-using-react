import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  // console.log(info);
  const { snippet, statistics } = info;
   const {viewCount,likeCount} = statistics;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-80 bg-gray-100 rounded-lg">
      <img className="rounded-lg" alt="thumNail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="font-bold">{channelTitle}</li>
        <li className="flex justify-between">{viewCount} Views
        <span>{likeCount+" "}likes</span></li>
        
      </ul>
    </div>
  );
};

export default VideoCard;
