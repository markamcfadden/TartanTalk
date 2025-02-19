import { Route, Routes } from "react-router-dom";
import { UseProvider } from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <UseProvider>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/article/:article_id" element={<ArticlePage />}></Route>
          <Route path="/search/" element={<Homepage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </UseProvider>
    </div>
  );
}

export default App;
