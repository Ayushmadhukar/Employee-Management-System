import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-900 via-black to-emerald-800">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>
        <p className="text-gray-300 text-center mt-2">Login to continue</p>
        <form onSubmit={submitHandler} className="flex flex-col gap-5 mt-8">
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl bg-transparent border border-emerald-500/60 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
            />
          </div>

          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-transparent border border-emerald-500/60 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          © 2026 Task Manager · Built by Ayush Madhukar
        </p>
      </div>
    </div>
  );
};

export default Login;
