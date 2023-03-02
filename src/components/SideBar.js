import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
   if (!isMenuOpen) return null;
  return (
    <div className="p-4 w-52 bg-white h-full z-10">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gamming</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Latter</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gamming</li>
      </ul>
    </div>
  );
};

export default SideBar;
