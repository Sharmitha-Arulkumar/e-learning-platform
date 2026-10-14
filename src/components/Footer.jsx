import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Terminal, Globe, Share2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-white"
            >
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <span>EduSite</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering developers, designers, and growth marketers globally
              with production-grade curriculum models.
            </p>
            {/* Social / Channel Vectors using core stable icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Network Channels"
                className="hover:text-indigo-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Share Track"
                className="hover:text-indigo-400 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Engineering Space"
                className="hover:text-indigo-400 transition-colors"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Catalog Columns */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Explore Tracks
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-white transition-colors"
                >
                  Development Tracks
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-white transition-colors"
                >
                  UI/UX Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-white transition-colors"
                >
                  Growth Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Columns */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Journeys
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Input Wire */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Newsletter Briefings
            </h4>
            <p className="text-xs mb-3 text-slate-400">
              Receive system deployment blueprints and fresh syllabus alerts
              monthly.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="developer@agency.com"
                className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-md focus:outline-hidden focus:border-indigo-400 text-slate-200"
              />
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md text-xs transition-colors shadow-sm"
              >
                Subscribe Track Updates
              </button>
            </form>
          </div>
        </div>

        {/* Closing Credentials Slice */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} EduSite Systems Inc. All active
            repository documentation protected.
          </p>
          <p className="flex items-center gap-1">
            Engineered with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using
            React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
