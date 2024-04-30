import imgright from "../assets/images/illustration-sign-up-desktop.svg";
// import imgicon from "./assets/images/icon-list.svg";
// import imgsuccess from "./assets/images/icon-success.svg";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="loginForm">
        <div className="left">
          <h1>내가 만든 로그인</h1>
          <h2>gkdl</h2>
        </div>
        <div className="right">
          <img src={imgright} />
        </div>
      </div>
    </div>
  );
};

export default Home;
