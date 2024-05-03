import NavBar from "./components/NavBar";
import useLocalStorage from "./hooks/useLocalStorage";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="app" data-theme={theme}>
      <NavBar theme={theme} handleToggleTheme={handleToggleTheme} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:name" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
