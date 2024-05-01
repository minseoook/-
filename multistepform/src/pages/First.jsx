import { useNavigate } from "react-router-dom";
import style from "./First.module.css";
import { useState } from "react";

const First = () => {
  const [users, setusers] = useState({});
  const [error, seterror] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setusers({ ...users, [e.target.name]: e.target.value });
  };
  const emailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? false : true;
  };

  const handleSubmit = () => {
    if (emailValid(users.email)) {
      seterror({ email: "이메일이 잘못됬습니다" });
      return;
    }
    if (!users.number) {
      seterror({ number: "전화번호를 입력해주세요" });
      return;
    }
    navigate("/2");
  };

  return (
    <div className={style.container}>
      <h1>개인 정보 입력</h1>
      <p>개인 정보 입력해주세요</p>
      <div className={style.inputs}>
        <label>이름</label>
        <input
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <div className={style.errormsg}>
          <label>이메일</label>
          {error.email && <span>{error.email}</span>}
        </div>
        <input
          className={error.email && style.error}
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <div className={style.errormsg}>
          <label>전화번호</label>
          {error.number && <span>{error.number}</span>}
        </div>

        <input
          className={error.number && style.error}
          name="number"
          type="text"
          placeholder="휴대폰 번호를 입력해주세요"
          onChange={handleChange}
        />
      </div>
      <div className={style.button}>
        <button onClick={handleSubmit}>다음 단계</button>
      </div>
    </div>
  );
};

export default First;
