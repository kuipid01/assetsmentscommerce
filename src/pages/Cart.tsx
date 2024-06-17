import { useCart } from "@/contexts/CartContext";
import { ChevronLeft, Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch, totalPrice } = useCart();
  // const getQuantity = (id: string) => {
  //   const item = state.cartItems.find((i) => i.id === id);

  //   return item?.quantity;
  // };
  return (
    <div className=" min-h-screen text-white">
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
            {state.cartItems.map((cartItm) => (
              <div
                key={cartItm._id}
                className="grid grid-cols-5  px-2 py-5  text-black font-medium "
              >
                <div className=" col-span-2 flex gap-3 items-center">
                  <div className=" size-10 rounded-sm bg-bgGray">
                    <img
                      src={cartItm.image || ""}
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
                    className="size-7  border rounded-full  flex justify-center items-center  bg-bgGray text-white text-sm"
                  >
                    <Minus
                      size={10}
                      color="rgb(208 148 35 / var(--tw-bg-opacity))"
                    />
                  </div>
                  <span>{cartItm.quantity}</span>
                  <div className="size-7  border rounded-full  flex justify-center items-center  bg-bgGray text-white text-sm">
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
                <span>#85</span>
              </div>
              <button className=" w-[70%] rounded-[30px] text-white flex justify-center items-center mt-3 mx-auto py-4 bg-secColor">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
