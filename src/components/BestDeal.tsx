import { ChevronRight } from "lucide-react";

const BestDeal = () => {
  return (
    <div className="w-full text-white flex ">
      <div className=" w-[80%]  flex mx-auto flex-col md:flex-row gap-10 md:max-w-[80%]">
        <div className="w-1/2 flex flex-col px-10 relative justify-center items-start gap-4 overflow-hidden h-[50vh] md:h-[70vh]  rounded-[30px]">
          <img
            src="/iphone.jpg"
            className="w-full absolute top-0 left-0 h-full object-cover "
            alt=""
          />
          <div className=" bg-black opacity-60 w-full h-full absolute top-0 left-0"></div>

          <p className="relative">Regular Offer</p>
          <h1 className="relative font-bold max-w-[70%] text-2xl">
            Best Deal Anywhere Around the World
          </h1>
          <button className=" relative h-[60px] w-fit px-[30px] text-white mt-5 bg-secColor rounded-[30px] flex items-center">
            Get Best Deal Now <ChevronRight />{" "}
          </button>
        </div>
        <div className="w-1/2 flex flex-col justify-center text-black bg-bgGray items-start px-10 gap-4 overflow-hidden  h-[50vh] md:h-[70vh]  rounded-[30px]">
          <p>Regular Offer</p>
          <h1 className="text-2xl">10% Cash Back</h1>
          <button className=" h-[60px] w-fit px-[30px] text-white mt-5 bg-mainBg rounded-[30px] flex items-center">
            Shop Now <ChevronRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
