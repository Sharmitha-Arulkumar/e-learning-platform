import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import MyLearning from "./pages/MyLearning";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/my-learning" element={<MyLearning />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
