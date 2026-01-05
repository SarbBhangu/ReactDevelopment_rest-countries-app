import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:code" element={<CountryDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

