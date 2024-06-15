import { Copyright, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" flex w-full bg-mainBg mt-20 flex-col items-center gap-5">
      <div className="flex py-2   gap-3 items-center">
        <img
          alt="logo-image"
          src="/logo.svg"
          className=" size-[40px] object-contain"
        />
        <h1 className=" text-white font-bold uppercase text-2xl">FlexBuy</h1>
      </div>
      <hr className=" bg-gray-500/10     w-full h-[1px]" />
      <div className=" w-full px-10 text-white flex justify-between py-5">
        <div className=" flex items-center gap-2 font-medium">
          <Copyright />
          <span>2024 Kuipid. All Rights Reserved</span>
        </div>
        <ul className=" flex  gap-3">
          <li>
            {" "}
            <Facebook />{" "}
          </li>
          <li>
            {" "}
            <Twitter />{" "}
          </li>
          <li>
            {" "}
            <Instagram />{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
