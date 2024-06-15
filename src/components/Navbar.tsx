import { Search, ShoppingBagIcon, User2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full bg-mainBg border-b border-gray-500">
      <div className=" flex bg-mainBg  text-white mx-auto md:w-[85%] w-[90%] h-[10vh]  items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            alt="logo-image"
            src="/logo.svg"
            className=" size-[40px] object-contain"
          />
          <h1 className=" font-bold uppercase text-lg">FlexBuy</h1>
        </div>
        <ul className="flex gap-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Category</li>
        </ul>
        <ul className=" flex gap-3">
          <li className="cursor-pointer">
            <Search />
          </li>
          <li onClick={() => navigate("/cart")} className="cursor-pointer">
            {" "}
            <ShoppingBagIcon />
          </li>
          <li className="cursor-pointer">
            {" "}
            <User2Icon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
