import { phoneProducts } from "@/components/TrendingProducts";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  //   const { id } = useParams();
  //   const fetchPrdouctData = async() => {
  //    const res = await backendApi
  //   }
  //   useEffect(() => {
  //   fetchPrdouctData()
  //   }, [input])
  return (
    <div className=" flex flex-col gap-5">
      <div className=" w-full text-center text-3xl font-bold text-white bg-mainBg md:h-[40vh] h-[20vh] flex justify-center items-center ">
        Test Product Name
      </div>
      <div
        onClick={() => navigate(-1)}
        className=" flex text-secColor gap-3 pl-10 font-bold"
      >
        <ChevronLeft color="rgb(208 148 35)" /> Back To Products
      </div>
      <div className=" w-[95%] md:max-w-[80%] gap-[20px] mx-auto flex flex-col md:flex-row">
        <div className="w-1/2 h-screen flex-col">
          <div className="h-[80%] relative overflow-hidden bg-bgGray rounded-[30px]  w-full">
            <img className="w-full h-full" src="/iphone.jpg" alt="" />
            <div className="  px-10 flex absolute w-full bottom-3 left-1/2 -translate-x-1/2 justify-between">
              <div className="px-5 bg-white py-3 rounded-[30px] text-secColor">
                {" "}
                <ChevronLeft color="rgb(208 148 35)" size={20} />
              </div>
              <div className="px-5 py-3 rounded-[30px] bg-secColor">
                <ChevronRight color="white" size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 h-fit py-5 flex justify-center items-start  flex-col">
          <small className="mb-4 text-sm font-bold text-gray-500">
            Category
          </small>
          <p className="mb-10 text-gray-700">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            nesciunt voluptate similique quasi architecto deleniti vitae harum
            earum porro cupiditate.
          </p>
          <h1 className=" text-lg mb-5 text-black font-bold">
            #20000
            <span className=" line-through font-light text-gray-400">
              #100000
            </span>
          </h1>
          <div className=" rounded-[30px] py-2 mb-[20px] px-7 gap-4 bg-bgGray flex items-center">
            <div className="size-10  border rounded-full  flex justify-center items-center px-3 py-1 bg-white text-white text-sm">
              <Minus color="rgb(208 148 35 / var(--tw-bg-opacity))" />
            </div>
            <span>1</span>
            <div className="size-10  border rounded-full  flex justify-center items-center px-3 py-1 bg-white text-white text-sm">
              <Plus color="rgb(208 148 35 / var(--tw-bg-opacity))" />
            </div>
          </div>
          <div className=" flex h-[60px]  items-center gap-3">
            <button className=" h-full w-fit px-[30px]  text-white bg-secColor rounded-[30px] flex items-center">
              Shop Now <ChevronRight />{" "}
            </button>
            <button className=" h-full px-[30px]  bg-mainBg text-white rounded-[30px] flex items-center">
              Shop Now <ChevronRight />{" "}
            </button>
            <div className="size-10  border rounded-full  flex justify-center items-center px-3 py-1 bg-white text-white text-sm">
              <Heart color="rgb(208 148 35 / var(--tw-bg-opacity))" />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:max-w-[80%] w-[90%] mx-auto my-5 ">
        <h1 className=" text-3xl mb-3">Description</h1>
        <p className=" font-light text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          error consectetur aliquid odio nemo animi impedit, reprehenderit ipsa
          porro eum ea excepturi, consequatur perferendis eaque. Aliquid
          corporis consequatur ullam explicabo rem et. Inventore nihil delectus
          enim harum exercitationem officiis, accusantium qui nesciunt ea porro
          recusandae ex dignissimos! Illum doloremque doloribus perferendis
          pariatur, dignissimos eaque sapiente corrupti. Odit quia odio autem
          ipsa sunt ut tenetur id reiciendis porro quis repellendus beatae
          voluptate maxime quod inventore ratione blanditiis quam totam ducimus
          quos commodi eum, quisquam doloribus! Modi possimus corporis vitae
          ullam reprehenderit dolore fuga fugiat saepe? At enim numquam pariatur
          repellat doloribus!
        </p>
      </div>
      <div className=" md:max-w-[80%] w-[90%] mx-auto my-5 ">
        <h1 className=" text-3xl mb-3">Related Products</h1>
        <div className=" flex mt-10 w-full flex-wrap gap-[20px] overflow-y-hidden">
          {phoneProducts.map((product, key) => (
            <SlimCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

export const SlimCard = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    image: string;
    discount: number;
    price: number;
    like: boolean;
  };
}) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className=" flex relative rounded-[30px] cursor-pointer w-[calc(50-20px)] md:w-[calc(33.3333%-20px)] lg:w-[calc(25%-20px)] h-[350px]  shrink-0 flex-col gap-3 items-center"
    >
      <div className=" rounded-[30px] h-[300px] w-full bg-bgGray  object-contain">
        <img src={product.image} alt="product image" />
        <div className="size-10 rounded-2xl flex justify-center items-center absolute top-3 left-3 px-3 py-1 bg-mainBg text-white text-sm">
          {Math.round(product.discount / 100)}%
        </div>
        <div className="size-10 rounded-2xl flex justify-center items-center absolute top-3 right-3 px-3 py-1 bg-white text-white text-sm">
          <Heart stroke="gray" fill={product.like ? "red" : "gray"} />
        </div>
      </div>
      <div className="h-[80px] justify-between flex items-center px-7 text-nowrap  text-black w-full rounded-[30px] bg-white">
        <div className=" flex flex-col text-clip max-w-[80%] overflow-x-hidden ">
          <h1 className="  text-ellipsis max-w-[50%]">{product.name}</h1>
          <h1>#{product.price}</h1>
        </div>
        <div className="size-10  rounded-2xl flex justify-center items-center px-3 py-1 bg-white text-white text-sm">
          <ShoppingBag color="rgb(208 148 35 / var(--tw-bg-opacity))" />
        </div>
      </div>
    </Link>
  );
};
