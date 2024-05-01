import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const params = location.pathname.split("/")[1];

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="steps">
          <div className={`number ${params === "" && "active"}`}>1</div>
          <div className="step">
            <span className="title">Step 1</span>
            <span className="desc">나의 정보</span>
          </div>
        </div>
      </Link>
      <Link to={"/2"}>
        <div className="steps">
          <div className={`number ${params === "2" && "active"}`}>2</div>
          <div className="step">
            <span className="title">Step 2</span>
            <span className="desc">선택</span>
          </div>
        </div>
      </Link>

      <Link to={"/3"}>
        <div className="steps">
          <div className={`number ${params === "3" && "active"}`}>3</div>
          <div className="step">
            <span className="title">Step 3</span>
            <span className="desc">더하기</span>
          </div>
        </div>
      </Link>
      <Link to={"/4"}>
        {" "}
        <div className="steps">
          <div className={`number ${params === "4" && "active"}`}>4</div>
          <div className="step">
            <span className="title">Step 4</span>
            <span className="desc">요약</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
