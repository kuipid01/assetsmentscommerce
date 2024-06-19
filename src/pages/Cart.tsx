import { useCart } from "@/contexts/CartContext";
import { ChevronLeft, Minus, Plus, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import AxiosInstance from "@/config/axiosInstance";
import { useUserLogged } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";

const Cart = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useUserLogged();
  const { state, dispatch, totalPrice } = useCart();
  // const getQuantity = (id: string) => {
  //   const item = state.cartItems.find((i) => i.id === id);
  const [adress, setAdress] = useState("");
  const [loading, setLoading] = useState(false);
  //   return item?.quantity;
  // };
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    console.log(window.location.toString());
    localStorage.setItem("from", "/cart");
    navigate("/login");
  }
  const handleOrder = async () => {
    const orderObject = {
      taxPrice: 10.0,
      shippingPrice: 5.0,
      isPaid: true,
      paidAt: "2024-06-02T00:00:00.000Z",
      isDelivered: true,
      paymentResult: {
        id: "abc123",
        status: "Completed",
        update_time: "2024-06-02T00:00:00.000Z",
        email_address: "user@example.com",
      },
      paymentMethod: "PayPal",
      shippingAddress: {
        address: adress,
        city: "Anytown",
        postalCode: "12345",
        country: "USA",
      },
      orderItems: state.cartItems,
    };
    try {
      setLoading(true);
      const createOrder = await AxiosInstance.post(`/orders`, { orderObject });
      const response = createOrder.data;
      if (response.status(201)) {
        alert("Order Submitted");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something went wro");
    }
  };
  return (
    <div className=" min-h-screen text-white">
      <Navbar />
      <div className=" w-full  text-center text-3xl font-bold text-white bg-mainBg md:h-[40vh] h-[20vh] flex justify-center items-center ">
        Cart
      </div>
      <div
        onClick={() => navigate(-1)}
        className=" flex text-secColor my-5 cursor-pointer gap-3 pl-10 font-bold"
      >
        <ChevronLeft color="rgb(208 148 35)" /> Back To Products
      </div>
      <div className=" flex  flex-col my-10">
        <div className=" md:w-[80%] flex flex-col md:flex-row gap-10 mx-auto">
          <div className=" md:w-[70%] shrink-0 rounded-[10px] min-h-[30vh] overflow-hidden bg-bgGray">
            <div className="grid grid-cols-4 md:grid-cols-5 px-2 py-5 bg-mainBg ">
              <span className=" md:col-span-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {state.cartItems.length < 1 && (
              <span className=" mt-7 px-4 text-black font-bold text-lg">
                {" "}
                Cart Empty{" "}
                <Link className=" text-secColor" to="/">
                  Go Home
                </Link>{" "}
              </span>
            )}
            {state?.cartItems?.map((cartItm) => (
              <div
                key={cartItm._id}
                className="grid grid-cols-5  px-2 py-5  text-black font-medium "
              >
                <div className=" col-span-2 flex gap-3 items-center">
                  <div className=" size-10 rounded-sm bg-bgGray">
                    <img
                      src={cartItm.imageUrl || ""}
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  </div>
                  <h1> {cartItm.name}</h1>
                </div>
                <span className="  flex items-center">#{cartItm.price}</span>
                <div className=" rounded-[30px] w-fit px-1 bg-white flex md:flex-row flex-col gap-2 items-center">
                  <div
                    onClick={() =>
                      dispatch({ type: "REDUCE_ITEM", payload: cartItm })
                    }
                    className="size-7 cursor-pointer border rounded-full  flex justify-center items-center  bg-bgGray text-white text-sm"
                  >
                    <Minus
                      size={10}
                      color="rgb(208 148 35 / var(--tw-bg-opacity))"
                    />
                  </div>
                  <span>{cartItm.quantity}</span>
                  <div
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: cartItm })
                    }
                    className="size-7  cursor-pointer border rounded-full  flex justify-center items-center  bg-bgGray text-white text-sm"
                  >
                    <Plus
                      size={10}
                      color="rgb(208 148 35 / var(--tw-bg-opacity))"
                    />
                  </div>
                </div>
                <div className=" flex  md:flex-row flex-col gap-2 items-center">
                  # {Math.round(cartItm.quantity * cartItm.price)}
                  <span
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: cartItm._id })
                    }
                    className=" ml-5 border border-black rounded-full cursor-pointer size-6 flex justify-center items-center "
                  >
                    {" "}
                    <X />{" "}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className=" md:w-[30%] shrink-0 rounded-[10px] min-h-[30vh] overflow-hidden bg-bgGray">
            <div className=" px-2 py-5 bg-mainBg ">Order Summary</div>
            <div className="  py-4 bg-bgGray text-black">
              <div className="px-3 flex w-full justify-between">
                <span>SubTotal:</span>
                <span>#{totalPrice.toFixed(2)}</span>
              </div>
              <div className=" px-3  my-5 flex w-full justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className=" w-full flex bg-white py-3  justify-between p-2">
                <span>Total:</span>
                <span>#{totalPrice.toFixed(2)}</span>
              </div>
              <Dialog>
                {state.cartItems.length > 0 && (
                  <DialogTrigger className=" mx-auto flex">
                    {" "}
                    <button className=" w-full px-7   rounded-[30px] text-white flex justify-center items-center mt-3 mx-auto py-4 bg-secColor">
                      Proceed To Checkout
                    </button>
                  </DialogTrigger>
                )}
                <DialogContent className=" flex flex-col bg-white">
                  <DialogHeader>
                    <DialogTitle>
                      Enter Necessary Details To Process Your Order
                    </DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="h-fit mt-3 bg-black">
                    <input
                      onChange={(e) => setAdress(e.target.value)}
                      type="text"
                      placeholder="address"
                      className=" border w-full px-5  border-gray-700 h-[50px]"
                    />
                  </DialogDescription>
                  <DialogFooter>
                    <button
                      disabled={loading}
                      onClick={handleOrder}
                      className={` ${
                        loading
                          ? "bg-secColor/30 cursor-not-allowed"
                          : "bg-secColor cursor-pointer "
                      } px-6 py-4 text-nowrap text-white font-medium
        `}
                    >
                      {loading ? "Creating Order" : "Submit"}
                    </button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
