import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "./url";

const Login = () => {
  const [email, setEmail] = useState("temp@gmail.com");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        `${url}/api/login`,
        { email, password },
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/");
        window.location.reload(); // Reload the page to reflect the new state

      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred while logging in.");
    }
  };
  

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div
        className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8"
        style={{
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Welcome Back</h1>
          <p className="text-blue-600/80 mt-2">
            Please sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-white/50"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-white/50"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-blue-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-blue-700"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            style={{
              background: "linear-gradient(to right, #3b82f6, #60a5fa)",
            }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-blue-600/80">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
