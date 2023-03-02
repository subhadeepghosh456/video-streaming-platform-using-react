import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { searchKeyWord } from "../utils/searchApiSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const [video,setVideo] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [show, setShow] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const queryClick = () => {
    if (searchQuery === "") return null;
    dispatch(searchKeyWord(searchQuery));
  };


  useEffect(() => {
     getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();

      setVideo(json.items[1]);
      // console.log(json.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    // console.log(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const clickOnsuggestion = (s) => {
    setSearchQuery(s);
  };

  return (
    <div className="w-full">
      <div className="grid grid-flow-col p-2 m-2 ">
        <div className="flex col-span-1">
          <img
            onClick={() => handleToggleMenu()}
            className="h-6 cursor-pointer"
            alt="menu"
            src="https://www.clipartmax.com/png/middle/303-3030668_hamburger-menu-comments-burger-menu-icon-svg.png"
          />
          <Link to="/">
            <img
              className="h-6 pl-6"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </Link>
        </div>

        <div className="col-span-10 flex justify-center mr-40">
          <input
            type="text"
            className="w-2/4 border border-gray-600 rounded-l-full pl-2 h-11"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
          />
          <button
            className="bg-gray-200 px-3 border border-gray-600 rounded-r-full h-11"
            onClick={() => queryClick()}
          >
            Search
          </button>
        </div>
        <div className="flex justify-between">
          <img
            className="h-12 col-span-1"
            alt="user"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
          
            <span className="bg-red-700 text-center pt-3 px-2 rounded-xl">
            <Link key={video.id} state={video} to={"live?v=" + video.id}>LIVE</Link>
            </span>
        </div>
      </div>
      {show && (
        <div className=" flex justify-center  ">
          <ul className="bg-white w-1/3 -ml-28 px-5 rounded-lg border-gray-100 fixed">
            {suggestion.map((s) => (
              <li
                key={s}
                className="py-2 hover:bg-slate-100 rounded-lg"
                onClick={(e) => console.log(e)}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
