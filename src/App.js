import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBuilder from "./pages/CardBuilder";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardBuilder />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
