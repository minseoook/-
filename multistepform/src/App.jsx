import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <NavBar />
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/2" element={<Second />} />
          <Route path="/3" element={<Third />} />
          <Route path="/4" element={<Fourth />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
