import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Preloader Component
const Preloader = () => (
  <div className="preloader flex items-center justify-center h-screen w-full fixed top-0 left-0 bg-white z-50">
    <div className="loader animate-spin rounded-full border-4 border-t-transparent border-blue-500 w-12 h-12"></div>
  </div>
);

// Main Application with Preloader
const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : <App />;
};

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
