import React from "react";
import { dummyCourses } from "../data/dummyData";
import { useApp } from "../context/AppContext";
import CourseCard from "../components/CourseCard";
import { CheckSquare, Square } from "lucide-react";

export default function MyLearning() {
  const { user, enrollments, progress, toggleLessonCompletion } = useApp();

  if (!user) {
    return (
      <div className="text-center py-20 font-medium text-slate-500">
        Please sign in to track active workflows.
      </div>
    );
  }

  const enrolledCourses = dummyCourses.filter((c) => !!enrollments[c.id]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800">
          Your Learning Dashboard
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Track updates, progress percentages, and active sandboxes.
        </p>
      </div>

      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {enrolledCourses.map((course) => {
            const completedList = progress[course.id] || [];
            const completionPercent =
              course.syllabus.length > 0
                ? Math.round(
                    (completedList.length / course.syllabus.length) * 100,
                  )
                : 0;

            return (
              <div
                key={course.id}
                className="bg-white border border-slate-100 rounded-xl shadow-xs overflow-hidden flex flex-col md:flex-row"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full md:w-48 h-48 md:h-full object-cover"
                />

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      By {course.instructor}
                    </p>

                    {/* Progress Bar Container */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                        <span>Course Completion</span>
                        <span>{completionPercent}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-indigo-600 h-full transition-all duration-300"
                          style={{ width: `${completionPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Checklist Sub-interface */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-700 mb-2">
                      Modules Checklist:
                    </h4>
                    <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                      {course.syllabus.map((lesson) => {
                        const isDone = completedList.includes(lesson.id);
                        return (
                          <button
                            key={lesson.id}
                            onClick={() =>
                              toggleLessonCompletion(course.id, lesson.id)
                            }
                            className="w-full flex items-center gap-2 text-left text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors"
                          >
                            {isDone ? (
                              <CheckSquare className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-300 flex-shrink-0" />
                            )}
                            <span
                              className={
                                isDone ? "line-through text-slate-400" : ""
                              }
                            >
                              {lesson.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-slate-200 rounded-xl">
          <p className="text-slate-400 font-medium">
            You are not actively enrolled in any modules yet.
          </p>
        </div>
      )}
    </div>
  );
}
