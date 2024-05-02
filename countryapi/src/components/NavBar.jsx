import style from "./NavBar.module.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Link to={"/"}>
      <div className={style.container}>
        <h2 className={style.title}>Hello World</h2>
        <div className={style.icon}>
          <MdOutlineDarkMode size={30} />
          {/* <MdOutlineLightMode /> */}
        </div>
      </div>
    </Link>
  );
};

export default NavBar;
