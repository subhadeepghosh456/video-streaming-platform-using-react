import React from "react";

const SearchedVideoCard = ({ info }) => {
  if (!info) return null;
  // console.log(info);
  const { snippet} = info;

  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-80 bg-gray-100 rounded-lg">
      <img className="rounded-lg" alt="thumNail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="font-bold">{channelTitle}</li> 
      </ul>
    </div>
  );
};

export default SearchedVideoCard;