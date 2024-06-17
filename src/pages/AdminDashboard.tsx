/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import AxiosInstance from "@/config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useUserLogged } from "@/contexts/UserContext";
import { BsHouseDoor } from "react-icons/bs";

const AdminDashboard = () => {
  const { isLoggedIn } = useUserLogged();
  const navigate = useNavigate();
  const [Orders, setOrders] = useState<any>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await AxiosInstance.get(`/orders`);
      // const { Orders } = await response.data;
      console.log(response.data);
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  if (!isLoggedIn) {
    console.log(window.location.toString());
    localStorage.setItem("from", "/dashboard");
    navigate("/login");
  }
  const GetTotalPrice = (order: any) => {
    // console.log(order);
    // return 1;
    const val = order.reduce(
      (accumulator: number, item: { price: number; qty: number }) => {
        return accumulator + item.price * item.qty;
      },
      0
    );
    return val;
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className=" w-full h-[20ch] bg-mainBg grid place-items-center text-2xl text-white font-bold">
        Dashboard
      </div>
      <div className=" px-10 flex  items-center justify-between">
        <div
          onClick={() => navigate(-1)}
          className=" flex text-secColor my-5 cursor-pointer gap-3  font-bold"
        >
          <ChevronLeft color="rgb(208 148 35)" /> Back To Products
        </div>
        <div
          onClick={() => navigate("/")}
          className=" flex items-center text-secColor my-5 cursor-pointer gap-3  font-bold"
        >
          Back To Home <BsHouseDoor color="rgb(208 148 35)" />
        </div>
      </div>

      <div className=" flex w-[90%] mx-auto my-5 justify-between">
        <div className=" flex items-end gap-1">
          <span className=" text-lg">Orders</span>
          <span className=" text-sm font-medium text-gray-700 ">
            ({Orders.length})
          </span>
        </div>
        <div className="py-3 px-6 rounded-md bg-secColor text-white text-lg">
          March 1 - March 30
        </div>
      </div>
      <Table className=" w-[90%] mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Orders.map((order: any) => (
            <TableRow>
              <TableCell className="font-medium">{order?._id}</TableCell>
              <TableCell>
                <img
                  src={order?.orderItems[0].image}
                  className="size-30 object-cover object-center"
                  alt=""
                />
                <span>{order?.orderItems[0].name}</span>
              </TableCell>
              <TableCell>{order?.shippingAddress.address}</TableCell>
              <TableCell className="text-right">
                {new Date(order?.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                {GetTotalPrice(order?.orderItems)}
              </TableCell>
              <TableCell
                className={` w-fit rounded-[10px] grid place-items-center mx-auto my-auto mt-2 text-white uppercase font-bold py-1 ${
                  order.isDelivered ? "bg-green-400" : "bg-red-400"
                }`}
              >
                {order.isDelivered ? "Delivered" : "On The Way"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="w-[90%] mx-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AdminDashboard;
