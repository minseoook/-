import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:name" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
