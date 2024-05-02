import style from "./ThankYou.module.css";
import img from "../assets/images/icon-thank-you.svg";
import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <div className={style.container}>
      <img src={img} />
      <h1>감사합니다</h1>
      <p>감사합니다 사랑합니다 고맙습니다 다음에 봐요</p>
      <Link className={style.button} to="/main">
        메인 페이지로 이동
      </Link>
    </div>
  );
};

export default ThankYou;
