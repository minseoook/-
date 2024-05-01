import imgright from "../assets/images/illustration-sign-up-desktop.svg";
import imgicon from "../assets/images/icon-list.svg";
// import imgsuccess from "./assets/images/icon-success.svg";
import "./home.css";
import { useState } from "react";
import SuccessModal from "../components/successModal";
const Home = () => {
  const [success, setsuccess] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");

  const emailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      seterror(true);
      setErrorMsg("이메일을 입력해주세요");
    } else if (emailValid(email)) {
      seterror(true);
      setErrorMsg("이메일의 형식이 잘못됬습니다");
    } else {
      setsuccess(true);
    }
  };
  return (
    <div className="home">
      {success ? (
        <SuccessModal />
      ) : (
        <div className="loginForm">
          <div className="left">
            <h1>이메일 검증 폼</h1>ㅋ
            <p>내가 만든 이메일 검증 폼 성공 메시지도 나오고 에러도 체크</p>
            <div className="check">
              <img src={imgicon} />
              <span>안녕하세요 반갑습니다</span>
            </div>
            <div className="check">
              <img src={imgicon} />
              <span>안녕하세요 저는 성민석입니다</span>
            </div>
            <div className="check">
              <img src={imgicon} />
              <span>안녕하세요 저는 프론트엔드 개뱔자 준비하고 있어요</span>
            </div>
            <div className="desc">
              <h4>이메일 입력</h4>
              {error && <h4 className="error">{errorMsg}</h4>}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className={error && "errors"}
                type="text"
                placeholder="email@google.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
            <button type="submit" onClick={handleSubmit}>
              구독 완료
            </button>
          </div>
          <div className="right">
            <img src={imgright} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
