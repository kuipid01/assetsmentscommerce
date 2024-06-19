import BestDeal from "@/components/BestDeal";
import FeaturedComponents from "@/components/FeaturedComponents";
import Navbar from "@/components/Navbar";
import TrendingComponents from "@/components/TrendingProducts";
import { Battery, Bolt, Camera, ChevronRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
const features = [
  {
    icon: <Bolt />,
    title: "Fast Performance",
    description: "Experience lightning-fast speeds with the latest processors.",
  },
  {
    icon: <Shield />,
    title: "Stunning Display",
    description:
      "Enjoy vibrant colors and sharp details on our high-resolution screens.",
  },
  {
    icon: <Battery />,
    title: "Long Battery Life",
    description:
      "Stay connected all day with batteries that last longer than ever.",
  },
  {
    icon: <Camera />,
    title: "High-Quality Camera",
    description:
      "Capture stunning photos and videos with our advanced camera systems.",
  },
];
const MainPage = () => {
  return (
    <div className="flex min-h-screen flex-col  h-fit">
      <Navbar />
      <header className="h-svh flex text-white bg-mainBg flex-col w-full">
        <section className=" md:w-[85%] h-[90vh] mx-auto w-[90%] flex md:flex-row flex-col gap-3 justify-center items-center  flex-1">
          <div className=" flex-1 gap-3 ">
            <div className="rounded-xl bg-bgGray px-5 py-1 text-xs text-secColor w-fit font-bold uppercase tracking-wider mb-0">
              {" "}
              Welcome to PhoneHub!
            </div>
            <h1 className=" text-4xl mb-4 leading-[55px] font-black">
              Your Ultimate Destination for the Latest Smartphones
            </h1>
            <p className=" text-bgGray font-medium">
              At PhoneHub, we bring you the best and latest in smartphone
              technology. Whether you're looking for the newest models,
              budget-friendly options, or the perfect accessories to complement
              your device, we've got you covered.
            </p>
            <div className=" flex items-center">
              <Link
                to="/products"
                className=" h-[60px] w-fit px-[30px] mt-5 bg-secColor rounded-[30px] flex items-center"
              >
                Shop Now <ChevronRight />{" "}
              </Link>
              <button className=" h-[60px]  w-fit px-[30px] mt-5 bg-transparent underline rounded-[30px] flex items-center">
                {" "}
                Follow Us On Instagram
              </button>
            </div>
          </div>
          <div className=" md:h-full items-center flex gap-3 h-1/2 md:w-[60%] w-full ">
            <div className=" h-[70%] w-[60%] rounded-[30px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/iphone.jpg"
                alt=""
              />
            </div>
            <div className=" h-[70%] w-[20%] rounded-[30px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/iphone2.jpg"
                alt=""
              />
            </div>
            <div className=" h-[70%] w-[20%] rounded-[30px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/iphone1.jpeg"
                alt=""
              />
            </div>
            <div></div>
          </div>
        </section>
      </header>
      <Features />
      <FeaturedComponents />
      <div className="my-[50px]">
        <TrendingComponents />
      </div>
      <BestDeal />
    </div>
  );
};

export default MainPage;

export const Features = () => {
  return (
    <div className=" flex w-full  h-fit py-[100px]  ">
      <div className=" flex w-full justify-between mx-auto max-w-[80%] items-center ">
        {features.map((feature, index) => (
          <div className="flex flex-col items-center " key={index}>
            <div className="icon">{feature.icon}</div>
            <div className="text-2xl font-bold text-gray-600">
              <h3>{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
