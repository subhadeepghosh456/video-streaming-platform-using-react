import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Computer Programming",
    "AI",
    "Sport",
    "History",
    "Songs",
    "Live",
    "Comedy",
    "Pathaan",
    "Kapil Sharma",
    "Foot Ball",
    "Cricket",
    "Bollywood",
    

  ];
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button item={item} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
