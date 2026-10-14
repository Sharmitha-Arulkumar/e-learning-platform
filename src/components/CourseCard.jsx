import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Users, Clock } from "lucide-react";

export default function CourseCard({ course, extraContent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
    >
      <div>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
            {course.category}
          </span>
          <h3 className="font-bold text-slate-800 mt-2 line-clamp-1">
            {course.title}
          </h3>
          <p className="text-slate-500 text-xs mt-1">
            Instructor: {course.instructor}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-500 mt-4">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-500" /> {course.rating}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />{" "}
              {course.students.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {course.duration}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        {extraContent ? (
          extraContent
        ) : (
          <Link
            to={`/course/${course.id}`}
            className="block text-center w-full py-2 bg-slate-50 text-indigo-600 border border-indigo-100 font-medium rounded-lg text-sm hover:bg-indigo-600 hover:text-white transition-all"
          >
            View Details
          </Link>
        )}
      </div>
    </motion.div>
  );
}
