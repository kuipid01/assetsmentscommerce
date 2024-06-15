import { ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const phoneProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S22 Ultra",
    discount: 10,
    price: 1199.99,
    like: true,
    image: "https://example.com/images/samsung_s22_ultra.jpg",
  },
  {
    id: 2,
    name: "iPhone 13 Pro Max",
    discount: 5,
    price: 1299.99,
    like: false,
    image: "https://example.com/images/iphone_13_pro_max.jpg",
  },
  {
    id: 3,
    name: "Google Pixel 6 Pro",
    discount: 15,
    price: 899.99,
    like: true,
    image: "https://example.com/images/google_pixel_6_pro.jpg",
  },
  {
    id: 4,
    name: "OnePlus 10 Pro",
    discount: 8,
    price: 899.99,
    like: true,
    image: "https://example.com/images/oneplus_10_pro.jpg",
  },
  {
    id: 5,
    name: "Xiaomi Mi 12",
    discount: 12,
    price: 699.99,
    like: false,
    image: "https://example.com/images/xiaomi_mi_12.jpg",
  },
  {
    id: 6,
    name: "Sony Xperia 1 III",
    discount: 0,
    price: 1099.99,
    like: false,
    image: "https://example.com/images/sony_xperia_1_iii.jpg",
  },
  {
    id: 7,
    name: "Samsung Galaxy Z Fold 4",
    discount: 20,
    price: 1799.99,
    like: true,
    image: "https://example.com/images/samsung_z_fold_4.jpg",
  },
  {
    id: 8,
    name: "iPhone SE (2022)",
    discount: 0,
    price: 429.99,
    like: false,
    image: "https://example.com/images/iphone_se_2022.jpg",
  },
  {
    id: 9,
    name: "Motorola Edge 30 Pro",
    discount: 10,
    price: 699.99,
    like: false,
    image: "https://example.com/images/motorola_edge_30_pro.jpg",
  },
  {
    id: 10,
    name: "ASUS ROG Phone 5s",
    discount: 15,
    price: 999.99,
    like: true,
    image: "https://example.com/images/asus_rog_phone_5s.jpg",
  },
];
const TrendingComponents = () => {
  return (
    <div className=" w-full   ">
      <div className=" h-fit  pt-[1px] flex flex-col gap-5 mx-auto max-w-[90%]">
        <div className=" flex justify-between">
          <h1 className="text-3xl ">Trending Products</h1>
          <div className="flex items-center">
            <div className="px-10 py-3 flex items-center text-white rounded-[30px] bg-secColor">
              View All Products
              <ChevronRight color="white" size={20} />
            </div>
          </div>
        </div>
        <div className=" flex mt-10 w-full flex-wrap gap-[20px] overflow-y-hidden">
          {phoneProducts.map((product, key) => (
            <RectCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingComponents;

export const RectCard = ({
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
      className=" flex relative rounded-[30px] cursor-pointer bg-bgGray w-[calc(50-20px)] md:w-[calc(33.3333%-20px)] lg:w-[calc(25%-20px)] h-[350px]  shrink-0 flex-col gap-3 items-center"
    >
      <div className="size-10 rounded-2xl flex justify-center items-center absolute top-3 left-3 px-3 py-1 bg-mainBg text-white text-sm">
        {Math.round(product.discount / 100)}%
      </div>
      <div className="size-10 rounded-2xl flex justify-center items-center absolute top-3 right-3 px-3 py-1 bg-white text-white text-sm">
        <Heart stroke="gray" fill={product.like ? "red" : "gray"} />
      </div>
      <div className=" rounded-full size-[250px]  object-contain">
        <img src={product.image} alt="product image" />
      </div>
      <div className="h-[80px] justify-between flex items-center px-7 text-white w-full rounded-[30px] bg-mainBg">
        <div className=" flex flex-col max-w-[70%]">
          <h1 className="  text-ellipsis max-w-full">{product.name}</h1>
          <h1>#{product.price}</h1>
        </div>
        <div className="size-10  rounded-2xl flex justify-center items-center px-3 py-1 bg-white text-white text-sm">
          <ShoppingBag color="rgb(208 148 35 / var(--tw-bg-opacity))" />
        </div>
      </div>
    </Link>
  );
};
