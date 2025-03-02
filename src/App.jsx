import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import Challange from "./pages/Challange";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/challenge/:id" element={<Challange />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
