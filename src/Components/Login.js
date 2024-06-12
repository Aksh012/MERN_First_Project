import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" max-w-screen max-h-screen justify-center items-center mt-36 flex">
      <div className="loginForm w-80 h-450px md:h-[450px] md:w-1/2 border-black bg-white md:flex border rounded-lg shadow-2xl shadow-pink-400 ">
        <div className="left hidden md:block md:w-1/2 p-5">
          <img
            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1718185935~exp=1718189535~hmac=da0118b7cdfff2213acff7b7d19114403ade40ea98cb6f7d0ebc1cb4b92e615e&w=740"
            alt=""
            className=" md:border border-black md:rounded-lg hidden md:block shadow-2xl shadow-black"
          />
        </div>
        <div className="right md:w-1/2 p-5 flex flex-col  text-black">
          <Link
            to="/"
            className="btn btn-sm btn-circle  btn-gost absolute ml-[260px] mt-[-15px] md:ml-[320px] md:mt-[-10px]"
          >
            X
          </Link>
          <h1 className=" font-extrabold text-3xl mt-3">
            Welcome <span className="text-yellow-400">Back !!!</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col">
              <span className="my-2 font-semibold">E-mail</span>
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="p-2 bg-base-100 border rounded-lg text-white "
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <span className="my-2 font-semibold">Password</span>
              <input
                type="password"
                placeholder="Enter your Password"
                className="p-2 bg-base-100 border rounded-lg text-white "
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              <button
                type="submit"
                className="btn btn-warning mt-7 hover:bg-yellow-500 hover:text-xl duration-300"
              >
                Login
              </button>
            </div>
          </form>

          <h1 className="my-5 mx-1">
            Not Registered?{" "}
            <span className="text-blue-900">
              <Link to="/signup">Sign Up Here</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
