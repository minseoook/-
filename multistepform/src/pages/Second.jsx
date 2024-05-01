import style from "./Second.module.css";
import icon1 from "../assets/images/icon-advanced.svg";
import icon2 from "../assets/images/icon-arcade.svg";
import icon3 from "../assets/images/icon-pro.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const [price, setprice] = useState("");
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };
  const handleNext = () => {
    navigate("/3");
  };

  return (
    <div className={style.container}>
      <div style={{ flex: "1" }}>
        <h1>요금제 선택 </h1>
        <p>원하는 요금제를 선택해주세요</p>
        <div className={style.plans}>
          <div
            className={`${style.plan} ${price === "기본" && style.active}`}
            onClick={() => setprice("기본")}
          >
            <img src={icon2} />
            <div className={style.price}>
              <span style={{ "font-weight": "600" }}>기본</span>
              <span>9900/한달</span>
            </div>
          </div>
          <div
            className={`${style.plan} ${price === "vip" && style.active}`}
            onClick={() => setprice("vip")}
          >
            <img src={icon1} />
            <div className={style.price}>
              <span style={{ "font-weight": "600" }}>vip</span>
              <span>19900/한달</span>
            </div>
          </div>
          <div
            className={`${style.plan} ${price === "vvip" && style.active}`}
            onClick={() => setprice("vvip")}
          >
            <img src={icon3} />
            <div className={style.price}>
              <span style={{ "font-weight": "600" }}>vvvip</span>
              <span>119900/한달</span>
            </div>
          </div>
        </div>
        {/* <div className={style.date}>
        <label>
          <input role="switch" type="checkbox" />
          <span>알람</span>
        </label>
      </div> */}
      </div>
      <div className={style.buttons}>
        <button className={style.prev} onClick={handlePrev}>
          이전 단계
        </button>
        <button className={style.next} onClick={handleNext}>
          다음 단계
        </button>
      </div>
    </div>
  );
};

export default Second;
