import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Authentication State
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("elearn_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Enrollments State: format { courseId: true }
  const [enrollments, setEnrollments] = useState(() => {
    const savedEnrollments = localStorage.getItem("elearn_enrollments");
    return savedEnrollments ? JSON.parse(savedEnrollments) : {};
  });

  // Progress State: format { courseId: [completedLessonId1, completedLessonId2] }
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem("elearn_progress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem("elearn_user", user ? JSON.stringify(user) : "");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("elearn_enrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  useEffect(() => {
    localStorage.setItem("elearn_progress", JSON.stringify(progress));
  }, [progress]);

  const login = (email, password) => {
    // Basic mock verification against local storage users
    const users = JSON.parse(
      localStorage.getItem("elearn_registered_users") || "[]",
    );
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      setUser({ name: foundUser.name, email: foundUser.email });
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const users = JSON.parse(
      localStorage.getItem("elearn_registered_users") || "[]",
    );
    if (users.some((u) => u.email === email)) return false;

    users.push({ name, email, password });
    localStorage.setItem("elearn_registered_users", JSON.stringify(users));
    setUser({ name, email });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const enrollInCourse = (courseId) => {
    setEnrollments((prev) => ({ ...prev, [courseId]: true }));
    if (!progress[courseId]) {
      setProgress((prev) => ({ ...prev, [courseId]: [] }));
    }
  };

  const toggleLessonCompletion = (courseId, lessonId) => {
    setProgress((prev) => {
      const currentLessons = prev[courseId] || [];
      const updatedLessons = currentLessons.includes(lessonId)
        ? currentLessons.filter((id) => id !== lessonId)
        : [...currentLessons, lessonId];
      return { ...prev, [courseId]: updatedLessons };
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        enrollments,
        enrollInCourse,
        progress,
        toggleLessonCompletion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
