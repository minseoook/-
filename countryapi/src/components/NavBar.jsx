import style from "./NavBar.module.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = ({ theme, handleToggleTheme }) => {
  return (
    <div className={style.container}>
      <Link to={"/"}>
        <h2 className={style.title}>Hello World</h2>
      </Link>

      <div className={style.icon} onClick={handleToggleTheme}>
        {theme === "dark" ? (
          <MdOutlineLightMode size={30} />
        ) : (
          <MdOutlineDarkMode size={30} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
