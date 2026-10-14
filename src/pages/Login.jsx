import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const success = login(email, password);
    if (success) {
      navigate("/my-learning");
    } else {
      setError(
        "Invalid credentials framework match or nonexistent profile registration.",
      );
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 px-6 py-8 bg-white border border-slate-100 rounded-xl shadow-xs">
      <h2 className="text-2xl font-black text-slate-800 text-center">
        Log In to Your Account
      </h2>
      <p className="text-slate-400 text-center text-xs mt-1">
        Access your dynamic learning timelines.
      </p>

      {error && (
        <div className="mt-4 p-3 bg-rose-50 text-rose-600 text-xs font-medium rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-wider">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-sm transition-colors shadow-xs"
        >
          Authorize Access
        </button>
      </form>
      <p className="text-slate-500 text-center text-xs mt-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-600 font-bold hover:underline"
        >
          Register here
        </Link>
      </p>
    </div>
  );
}
