import { LIST_FUNCTIONS } from "../const/index";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-8">
      {LIST_FUNCTIONS.map((ele) => (
        <div
          onClick={() => navigate(ele.link)}
          key={ele.name}
          className="cursor-pointer h-[100px] bg-secondary rounded-3xl flex justify-center items-center">
          {ele.name}
        </div>
      ))}
    </div>
  );
};

export default Homepage;
