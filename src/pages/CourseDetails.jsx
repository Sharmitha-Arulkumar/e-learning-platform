import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyCourses } from "../data/dummyData";
import { useApp } from "../context/AppContext";
import { Star, ShieldAlert, Award, PlayCircle } from "lucide-react";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, enrollments, enrollInCourse } = useApp();

  const course = dummyCourses.find((c) => c.id === id);
  if (!course)
    return (
      <div className="text-center py-20 font-semibold text-rose-500">
        Course Data Missing.
      </div>
    );

  const isEnrolled = !!enrollments[course.id];

  const handleEnrollment = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    enrollInCourse(course.id);
    navigate("/my-learning");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Content Column */}
      <div className="lg:col-span-2">
        <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase tracking-wider">
          {course.category}
        </span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-3">
          {course.title}
        </h1>
        <p className="text-slate-500 text-sm mt-2">
          Instruction presented under domain supervisor{" "}
          <span className="font-semibold text-slate-700">
            {course.instructor}
          </span>
        </p>

        <div className="flex items-center gap-6 mt-4 text-sm text-slate-600">
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            <Star className="w-4 h-4 fill-amber-500" /> {course.rating} Stars
          </span>
          <span>{course.students.toLocaleString()} Active Learners</span>
          <span>Duration: {course.duration}</span>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Overview description
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Syllabus layout */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Course Curriculum
          </h2>
          <div className="space-y-3">
            {course.syllabus.map((lesson, idx) => (
              <div
                key={lesson.id}
                className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm font-medium text-slate-700"
              >
                <PlayCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>
                  {idx + 1}. {lesson.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Conversion Box */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 bg-white rounded-xl border border-slate-100 shadow-md overflow-hidden">
          <img
            src={course.image}
            alt="Preview"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="text-2xl font-black text-slate-800 mb-4">
              Free Access{" "}
              <span className="text-xs font-normal text-slate-400 line-through pl-2">
                $199.99
              </span>
            </div>

            {isEnrolled ? (
              <button
                onClick={() => navigate("/my-learning")}
                className="w-full text-center py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-xs transition-colors"
              >
                Go To Classroom dashboard
              </button>
            ) : (
              <button
                onClick={handleEnrollment}
                className="w-full text-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-xs transition-colors"
              >
                {user ? "Enroll Now" : "Sign in to Enroll"}
              </button>
            )}

            <div className="mt-6 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-indigo-500" /> Professional
                validation profile certificate
              </div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-indigo-500" /> Full
                sandbox lifetime curriculum scope
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
