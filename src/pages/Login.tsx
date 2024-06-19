import React, { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import AxiosInstance from "@/config/axiosInstance";
import Navbar from "@/components/Navbar";

const Login: React.FC = () => {
  // const { user, loginUser, loginUserUsingGoogle } = useAuth()
  const loginForm = useRef<HTMLFormElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();

  const textAnim = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginForm.current) return;

    const email = (
      loginForm.current.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      loginForm.current.elements.namedItem("password") as HTMLInputElement
    ).value;

    if (!email || !password) {
      alert("You've not filled some necessary details, fix up.");
      return;
    }
    try {
      const response = await AxiosInstance.post("/users/login", {
        email,
        password,
      });
      const { token } = await response.data;

      localStorage.setItem("atk", token);
      const prevLink = localStorage.getItem("from");
      if (prevLink) {
        console.log(prevLink);
        navigate(prevLink);
      } else navigate("/");
    } catch (error) {
      console.log(error);
    }
    // const userInfo = { email, password };

    // loginUser(userInfo);
  };

  return (
    <>
      <Navbar />
      <div className="w-full overflow-x-hidden relative rounded-r-3xl bg-primary-light flex h-screen">
        <div className="absolute flex px-5 left-0 top-5 w-full justify-between">
          <AiOutlineArrowLeft
            onClick={() => navigate(-1)}
            className="cursor-pointer z-30 text-2xl text-gray-700 md:text-gray-50"
          />
          <Link
            className="cursor-pointer bg-primary-light border px-3 py-1 rounded text-white"
            to="/"
          >
            Home
          </Link>
        </div>

        <div className="hidden md:flex w-1/3 relative h-full bg-mainBg text-white p-4">
          <motion.h1
            variants={textAnim}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1,
              type: "linear",
            }}
            className="mt-[50px] text-3xl"
          >
            Continue your <br /> journey on{" "}
            <span className="text-4xl uppercase text-secColor font-extrabold">
              Flexbuy
            </span>{" "}
            Flexbuy
          </motion.h1>
          <motion.img
            variants={textAnim}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1,
              type: "linear",
            }}
            className="absolute top-[20%] -right-[40%] rotate-12"
            src="/Login.png"
            alt=""
          />
        </div>
        <div className="flex flex-col h-full justify-center items-center bg-white shadow-lg flex-1 md:rounded-l-3xl">
          <div className="md:w-[70%] w-[90%] gap-4 flex flex-col h-full justify-center items-start">
            <h1 className="text-3xl font-bold">Welcome back</h1>

            <form
              onSubmit={handleSubmit}
              ref={loginForm}
              className="w-full flex flex-col gap-4"
            >
              <motion.input
                variants={textAnim}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 1,
                  type: "linear",
                }}
                name="email"
                type="email"
                className="w-full outline-none border-b border-gray-400 py-3"
                placeholder="Email"
              />
              <div className="relative">
                <motion.input
                  variants={textAnim}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 1,
                    type: "linear",
                  }}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none border-b border-gray-400 py-3"
                  placeholder="Password"
                />
                <div
                  onClick={handleTogglePasswordVisibility}
                  className="absolute w-fit h-[20px] cursor-pointer top-1/2 -translate-y-1/2 right-2 flex items-center focus:outline-none"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>

              <button
                type="submit"
                className="bg-mainBg rounded-md text-white w-full py-3"
              >
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <Link className="text-secColor" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
