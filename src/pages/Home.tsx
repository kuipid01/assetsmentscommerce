import React from "react";

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Home = () => {
  return (
    <div className="bg-[#012269] min-h-[1117px] min-w-[1728px]  flex flex-col h-screen w-full">
      <div className="h-[106px] relative overflow-x-hidden  w-full  flex items-center ">
        <div className=" w-fit absolute left-1/2 -translate-x-1/2  flex gap-[107px] h-fit text-nowrap">
          {daysOfTheWeek.map((day) => (
            <span
              key={day} // Adding key prop for optimization
              style={{
                textShadow:
                  day === "Thursday"
                    ? `-1px -1px 0 #ffffff, 
                     1px -1px 0 #ffffff, 
                    -1px 1px 0 #ffffff, 
                     1px 1px 0 #ffffff,
                    -2px -2px 0 #ffffff, 
                     2px -2px 0 #ffffff, 
                    -2px 2px 0 #ffffff, 
                     2px 2px 0 #ffffff,
                    -3px -3px 0 #ffffff, 
                     3px -3px 0 #ffffff, 
                    -3px 3px 0 #ffffff, 
                     3px 3px 0 #ffffff`
                    : "", // Conditional text shadow
              }}
              className={`w-fit h-fit text-[50.52px] ${
                day === "Thursday" && "text-[#012269]"
              } text-[#FFFFFF45] lowercase leading-[42.94px] tracking-[-5%] font-bold`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
      <div className=" px-[84px] pb-[61px] w-full flex-1  flex justify-center items-center">
        <div
          style={{
            boxShadow: "35px 55px 8.3px 0px rgba(0, 0, 0, 0.1)",
          }}
          className=" relative w-full h-full rounded-[43px]  flex-1 bg-[#171717] "
        >
          <div className=" flex px-[62px] items-center pt-[48px] justify-between">
            <div className=" flex gap-[18px] items-center">
              <div className=" size-[27px] rounded-full bg-[#FF5E57]"></div>
              <div className=" size-[27px] rounded-full bg-[#FFBB2E]"></div>
              <div className=" size-[27px] rounded-full bg-[#38C149]"></div>
            </div>
            <img
              src="/logo.svg"
              alt="logo"
              className=" w-[159px] h-[32px] object-cover object-center"
            />
          </div>
          <div className=" = justify-center items-center  flex flex-col">
            <img
              src="/hometext.svg"
              alt="logo"
              className=" w-[975px] mt-[82px] h-[166px]  object-contain"
            />
            <img
              src="/linerug.svg"
              className=" h-[19.33px] w-[403.5px]"
              alt="vec"
            />
            <div className="flex mt-[172px] gap-[13px]">
              <button className=" bg-[#FFFFFF]  h-[91px] w-[317px] text-[#3D3D3D5E]  text-[22px] font-bold  tracking-[-5%]  leading-[18.7px] rounded-[26px]">
                rerowt@gmail.com
              </button>
              <button className=" bg-[#169BD6]  h-[91px] w-[317px] text-white  text-[22px] font-bold  tracking-[-5%]  leading-[18.7px] rounded-[26px]">
                GET EARLY ACCESS
              </button>
            </div>
          </div>
          <img
            className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-[233px] w-[616px]"
            src="/homepagephone.svg"
            alt="iphone"
          />
          <div className=" absolute bottom-[53px] w-full px-[79px] left-1/2 -translate-x-1/2 flex justify-between items-center  text-[#FFFFFF] tracking-[-5%] text-[18px] leading-[15.3px]  font-bold">
            <span>(C) Rerowt 2024. All rights reserved.</span>
            <span className=" flex gap-[19px] items-center">
              <img src="/fb.svg" alt="" />
              <img src="/x.svg" alt="" />
              <img src="/ig.svg" alt="" />
              <img src="/linked.svg" alt="" />
              <img src="/youtube.svg" alt="" />
              <img src="/tiktok.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
