import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout route (shows Header + Outlet) */}
          <Route path="/" element={<App />}>
            {/* Home page shows inside <Outlet /> */}
            <Route index element={<HomePage />} />

            {/* Country detail page */}
            <Route path="country/:code" element={<CountryDetailPage />} />

            {/* Not found page */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);



