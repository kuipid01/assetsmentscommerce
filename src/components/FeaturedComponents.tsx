import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedComponents = () => {
  const phoneCategories = [
    {
      id: 1,
      name: "Flagship Phones",
      image: "https://example.com/images/flagship.jpg",
    },
    {
      id: 2,
      name: "Budget Phones",
      image: "https://example.com/images/budget.jpg",
    },
    {
      id: 3,
      name: "Gaming Phones",
      image: "https://example.com/images/gaming.jpg",
    },
    {
      id: 4,
      name: "Camera Phones",
      image: "https://example.com/images/camera.jpg",
    },
    {
      id: 5,
      name: "5G Phones",
      image: "https://example.com/images/5g.jpg",
    },
    {
      id: 6,
      name: "Foldable Phones",
      image: "https://example.com/images/foldable.jpg",
    },
    {
      id: 7,
      name: "Rugged Phones",
      image: "https://example.com/images/rugged.jpg",
    },
    {
      id: 8,
      name: "Compact Phones",
      image: "https://example.com/images/compact.jpg",
    },
  ];
  return (
    <div className=" w-full ">
      <div className=" h-fit flex flex-col gap-5 mx-auto max-w-[80%]">
        <div className=" flex justify-between">
          <h1 className="text-3xl ">Featured Products</h1>
          <div className="flex items-center">
            <div className="px-10 py-3 rounded-[30px] text-secColor">
              {" "}
              <ChevronLeft color="rgb(208 148 35)" size={20} />
            </div>
            <div className="px-10 py-3 rounded-[30px] bg-secColor">
              <ChevronRight color="white" size={20} />
            </div>
          </div>
        </div>
        <div className=" flex w-full gap-5 overflow-y-hidden">
          {phoneCategories.map((product, key) => (
            <CircularCard key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponents;

const CircularCard = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    image: string;
  };
}) => {
  return (
    <div className=" flex  shrink-0 flex-col gap-3 items-center">
      <div className=" rounded-full size-[250px] bg-bgGray object-contain">
        <img src={product.image} alt="product image" />
      </div>
      <h1>{product.name}</h1>
    </div>
  );
};
