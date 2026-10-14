import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { dummyCourses } from "../data/dummyData";
import CourseCard from "../components/CourseCard";
import { Award, BookOpen, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-900 to-slate-900 text-white py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Upgrade Your Skills For Tomorrow's Industry
          </h1>
          <p className="text-slate-300 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Access professional, video-guided syllabi created by engineers and
            designers worldwide.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/courses"
              className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-600 transition-all"
            >
              Explore Courses
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Badging Features */}
      <section className="py-12 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-xs border border-slate-100">
            <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
              <BookOpen />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Expert Instruction</h3>
              <p className="text-sm text-slate-500 mt-0.5">
                Learn from verified developers and domain leads.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-xs border border-slate-100">
            <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
              <ShieldCheck />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">
                Lifetime Framework access
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                Study flexibly on your schedule across desktop and mobile
                devices.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-xs border border-slate-100">
            <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
              <Award />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Practical Sandboxing</h3>
              <p className="text-sm text-slate-500 mt-0.5">
                Complete lessons to assemble high-caliber resume portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl pb-2 font-extrabold text-slate-800">
              Trending Courses
            </h2>
            <p className="text-slate-500 text-sm">
              Our highest-rated digital offerings this month.
            </p>
          </div>
          <Link
            to="/courses"
            className="text-indigo-600 font-semibold hover:underline text-sm"
          >
            See All Courses →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyCourses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
