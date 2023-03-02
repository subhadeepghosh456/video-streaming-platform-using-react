import { useDispatch } from "react-redux";
import { searchKeyWord } from "../utils/searchApiSlice";
const Button = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(searchKeyWord(item));
  };
  return (
    <div
      className="px-5 py-2 m-2 bg-gray-200 rounded-xl hover:bg-slate-500 cursor-pointer"
      onClick={() => handleClick(item)}
    >
      {item}
    </div>
  );
};

export default Button;
