import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
const Register = () => {
  const registerForm = useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = useState(false);
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

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!registerForm.current) return;

    const formData = new FormData(registerForm.current);
    const email = formData.get("email") as string;
    const password1 = formData.get("password1") as string;
    const password2 = formData.get("password2") as string;

    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }

    const userInfo = {
      email,
      password: password1,
      passwordConfirm: password2,
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log(data);
      if (data) {
        localStorage.setItem("atk", data.token);
      }
      // Redirect or do something with successful registration
      navigate("/login"); // Example redirect
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full relative rounded-r-3xl bg-primary-light flex h-screen">
      <AiOutlineArrowLeft
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer z-30 text-2xl text-gray-700 md:text-gray-50 left-5 top-5"
      />
      <div className="hidden md:flex w-1/3 bg-mainBg relative h-full text-white p-4">
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
          Start your <br /> journey on{" "}
          <span className="text-4xl uppercase text-secColor font-extrabold">
            FlexBuy
          </span>{" "}
          FlexBuy
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
          src="/register.png"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-center items-center bg-white shadow-lg flex-1 md:rounded-l-3xl">
        <div className="md:w-[70%] w-[90%] gap-4 flex flex-col h-full justify-center items-start">
          <h1 className="font-bold">Create Account</h1>

          <form
            ref={registerForm}
            onSubmit={handleSubmit}
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
              type="text"
              name="name"
              className="w-full outline-none border-b border-gray-400 py-3"
              placeholder="Username"
            />
            <motion.input
              variants={textAnim}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1,
                type: "linear",
              }}
              name="email"
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
                name="password1"
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
            <div className="relative">
              <motion.input
                variants={textAnim}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 1,
                  type: "linear",
                }}
                name="password2"
                type={showPassword ? "text" : "password"}
                className="w-full outline-none border-b border-gray-400 py-3"
                placeholder="Confirm password"
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
              Create Account
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="text-secColor" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
