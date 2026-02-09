import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    // console.log("email is", email);
    // console.log("password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className=" flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400  rounded-full "
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-3  rounded-full  "
            type="password"
            placeholder="Enter password"
          />
          <button className="border-2 border-none py-3 px-5 text-xl text-white outline-none bg-emerald-600 placeholder:text-white mt-5  rounded-full">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
