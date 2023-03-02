import React from "react";

const SuggestionCard = ({ info }) => {
  if (!info) return null;
  const { snippet } = info;

  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" bg-gray-100 rounded-lg flex gap-4">
      <div className="w-48">
        <img
          className="rounded-lg w-full"
          alt="thumNail"
          src={thumbnails?.medium.url}
        />
      </div>
      <ul className="w-72">
        <li className="font-medium">{title}</li>
        <li className="">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SuggestionCard;
