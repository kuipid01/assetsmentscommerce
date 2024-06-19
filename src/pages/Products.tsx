import { RectCard } from "@/components/TrendingProducts";
import AxiosInstance from "@/config/axiosInstance";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const fetchTrendingProducts = async () => {
      const response = await AxiosInstance.get(
        `/products?pageNumber=${pageNumber}`
      );
      const { products } = await response.data;
      setProducts(products);
    };
    fetchTrendingProducts();
  }, [pageNumber]);
  return (
    <div className=" w-full   ">
      <Navbar />
      <div className=" h-fit py-5  pt-[1px] flex flex-col gap-5 mx-auto ">
        <div className="  pt-1 flex flex-col justify-between">
          <div className=" w-full  text-center text-3xl font-bold text-white bg-mainBg md:h-[40vh] h-[20vh] flex justify-center items-center ">
            Products
          </div>
          <div className="flex mt-5 items-center">
            <div
              onClick={() => navigate(-1)}
              className="px-10 py-3 flex items-center text-white rounded-[30px] bg-secColor"
            >
              Back
              <ChevronRight color="white" size={20} />
            </div>
          </div>
        </div>
        <div className=" flex mt-10 w-full flex-wrap gap-[20px] overflow-y-hidden">
          {products.map((product, key) => (
            <RectCard key={key} product={product} />
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem
              onClick={() => setPageNumber((p) => (p === 1 ? p : p - 1))}
            >
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => setPageNumber(1)}>
                1
              </PaginationLink>
              <PaginationLink onClick={() => setPageNumber(2)}>
                2
              </PaginationLink>
              <PaginationLink onClick={() => setPageNumber(3)}>
                3
              </PaginationLink>
              <PaginationLink onClick={() => setPageNumber(4)}>
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem
              onClick={() => setPageNumber((p) => (p === 1 ? p : p - 1))}
            >
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Products;
