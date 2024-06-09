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
    <div className="bg-[#012269] overflow-hidden w-full h-full min-h-[852px] lg:min-h-[1117px] lg:min-w-[1728px]  flex flex-col ">
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
              className={`w-fit h-fit text-[28.51px] lg:text-[50.52px] ${
                day === "Thursday" && "text-[#012269]"
              } text-[#FFFFFF45] lowercase leading-[42.94px] tracking-[-5%] font-bold`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
      <div className=" px-[27px] lg:px-[84px] pb-[77px] lg:pb-[61px] w-full relative flex-1  flex justify-center items-center">
        <div
          style={{
            boxShadow: "35px 55px 8.3px 0px rgba(0, 0, 0, 0.1)",
          }}
          className=" relative w-full md:h-full rounded-[43px] h-[693px]   flex-1 bg-[#171717] "
        >
          <img
            src="/elipsesvg.svg"
            className=" h-full w-full lg:flex hidden absolute left-0 "
            alt=""
          />
          <div className=" flex px-[23px] lg:px-[62px] items-center pt-[25px] lg:pt-[48px] justify-between">
            <div className=" flex gap-2 lg:gap-[18px] items-center">
              <div className=" size-4 lg:size-[27px] rounded-full bg-[#FF5E57]"></div>
              <div className=" size-4 lg:size-[27px] rounded-full bg-[#FFBB2E]"></div>
              <div className=" size-4 lg:size-[27px] rounded-full bg-[#38C149]"></div>
            </div>
            <img
              src="/logo.svg"
              alt="logo"
              className=" w-[159px] lg:flex hidden h-[32px] object-cover object-center"
            />
          </div>
          <div className="  items-center h-full flex flex-col">
            <img
              src="/hometext.svg"
              alt="logo"
              className=" w-[975px] mt-[82px] hidden lg:flex h-[166px]  object-contain"
            />
            <h1 className=" text-[37.28px] mt-[55px] lg:mt-auto lg:hidden  text-white  leading-[31.69px] tracking-[-5%] font-bold text-center max-w-[271px] ">
              keeping connection{" "}
              <span
                className=" text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #169BD6 0%, #169BD6 38%, #0542D0 100%)",
                  backgroundClip: "text",
                }}
              >
                {" "}
                seamless.
              </span>{" "}
            </h1>

            <img
              src="/linerug.svg"
              className=" my-[16px]  h-[19.33px] w-[166px] lg:w-[403.5px]"
              alt="vec"
            />
            <p className=" lg:hidden w-[127px] text-white font-bold  text-center text-[20px] tracking-[-5%]   leading-[26.6px]">
              Recharge. Rerowt, Anytime.
            </p>
            <div className="flex lg:flow-row justify-center items-center flex-col mt-[81px] lg:mt-[172px] gap-[13px]">
              <button className=" bg-[#FFFFFF]  lg:h-[91px] h-[42px] w-[179px] lg:w-[317px] text-[#3D3D3D5E]  text-[10.21px] lg:text-[22px] font-bold  tracking-[-5%]  leading-[18.7px] lg:rounded-[26px]  rounded-[12.06px]">
                rerowt@gmail.com
              </button>
              <button className=" bg-[#169BD6] text-[10.21px]  lg:h-[91px] h-[42px] w-[124px] lg:w-[317px] text-white  lg:text-[22px] font-bold  tracking-[-5%]  leading-[18.7px] lg:rounded-[26px]  rounded-[12.06px]">
                GET EARLY ACCESS
              </button>
            </div>
          </div>
          <img
            className=" absolute bottom-0 left-1/2 -translate-x-1/2 h-[59px] lg:h-[233px] w-[221px] lg:w-[616px]"
            src="/homepagephone.svg"
            alt="iphone"
          />
          <div className=" absolute text-[7.24px] bottom-[90px] gap-[21px] flex-col-reverse lg:flex-row lg:bottom-[53px] w-full px-[79px] left-1/2 -translate-x-1/2 flex justify-between items-center  text-[#FFFFFF] tracking-[-5%] lg:text-[18px] leading-[15.3px]  font-bold">
            <span>(C) Rerowt 2024. All rights reserved.</span>
            <span className=" flex gap-[19px] items-center">
              <img
                className="lg-size-[20px] size-[11px]"
                src="/fb.svg"
                alt=""
              />
              <img className="lg-size-[20px] size-[11px]" src="/x.svg" alt="" />
              <img
                className="lg-size-[20px] size-[11px]"
                src="/ig.svg"
                alt=""
              />
              <img
                className="lg-size-[20px] size-[11px]"
                src="/linked.svg"
                alt=""
              />
              <img
                className="lg-size-[20px] size-[11px]"
                src="/youtube.svg"
                alt=""
              />
              <img
                className="lg-size-[20px] size-[11px]"
                src="/tiktok.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
