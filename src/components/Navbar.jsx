import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { BookOpen, LogOut, User, LayoutDashboard, Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useApp();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Brand Logo - Shrinks nicely, never wraps */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 font-bold text-lg sm:text-xl text-indigo-600 shrink-0"
        >
          <BookOpen className="w-5 h-5 sm:w-6 h-6" />
          <span>EduSite</span>
        </Link>

        {/* DESKTOP NAVIGATION - Hidden entirely on small screens */}
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-600">
          <Link
            to="/courses"
            className="hover:text-indigo-600 transition-colors"
          >
            All Courses
          </Link>
          {user ? (
            <>
              <Link
                to="/my-learning"
                className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" /> My Learning
              </Link>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <span className="text-slate-800 text-sm flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
                  <User className="w-3.5 h-3.5 text-indigo-500" /> {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="text-rose-500 hover:text-rose-700 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-all shadow-xs"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE MENU TOGGLE BUTTON - Visible only on mobile screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 focus:outline-hidden p-1 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE EXPANDED DRAWER */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-3 font-medium text-slate-600 pb-2">
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-600 text-center py-1.5 transition-colors border-b border-slate-50"
          >
            All Courses
          </Link>
          {user ? (
            <>
              <Link
                to="/my-learning"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-indigo-600 py-1.5 transition-colors border-b border-slate-50"
              >
                <LayoutDashboard className="w-4 h-4" /> My Learning
              </Link>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-slate-800 text-sm flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
                  <User className="w-3.5 h-3.5 text-indigo-500" /> {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                    setIsOpen(false);
                  }}
                  className="text-rose-500 flex items-center gap-1 text-sm font-semibold cursor-pointer"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 text-indigo-600 bg-slate-50 rounded-lg text-sm font-semibold"
              >
                Log In
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
