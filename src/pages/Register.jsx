import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const success = register(name, email, password);
    if (success) {
      navigate("/my-learning");
    } else {
      setError("This email routing signature is already registered.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 px-6 py-8 bg-white border border-slate-100 rounded-xl shadow-xs">
      <h2 className="text-2xl font-black text-slate-800 text-center">
        Create Learning Profile
      </h2>
      <p className="text-slate-400 text-center text-xs mt-1">
        Get immediate free deployment track entries.
      </p>

      {error && (
        <div className="mt-4 p-3 bg-rose-50 text-rose-600 text-xs font-medium rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-indigo-500"
            placeholder="Your Name"
          />
        </div>
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
          Register Securely
        </button>
      </form>
      <p className="text-slate-500 text-center text-xs mt-4">
        Already registered?{" "}
        <Link to="/login" className="text-indigo-600 font-bold hover:underline">
          Log in instead
        </Link>
      </p>
    </div>
  );
}
