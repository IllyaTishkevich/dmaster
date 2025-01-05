import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBuilder from "./pages/CardBuilder";
import NoPage from "./pages/NoPage";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CardBuilder />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
