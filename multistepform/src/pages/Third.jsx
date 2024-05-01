import { useNavigate } from "react-router-dom";
import style from "./Third.module.css";
import { useState } from "react";
const Third = () => {
  const [selected, setselected] = useState("");
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate("/2");
  };
  const handleNext = () => {
    navigate("/4");
  };
  return (
    <div className={style.container}>
      <div style={{ flex: "1" }}>
        <h1>추가 서비스</h1>
        <p>원하는 추가 서비스를 골라주세요</p>
        <div className={style.services}>
          <div className={style.service}>
            <div className={style.check}>
              <input type="checkbox" />
              <div className={style.desc}>
                <span>온라인 서비스2</span>
                <span>온라인 서비스2를 이용해 보세요</span>
              </div>
            </div>
            <div className={style.price}>1원/한달</div>
          </div>

          <div className={style.service}>
            <div className={style.check}>
              <input type="checkbox" />
              <div className={style.desc}>
                <span>온라인 서비스3</span>
                <span>온라인 서비스3를 이용해 보세요</span>
              </div>
            </div>
            <div className={style.price}>2원/한달</div>
          </div>

          <div className={style.service}>
            <div className={style.check}>
              <input type="checkbox" />
              <div className={style.desc}>
                <span>온라인 서비스4</span>
                <span>온라인 서비스4를 이용해 보세요</span>
              </div>
            </div>
            <div className={style.price}>4원/한달</div>
          </div>
        </div>
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

export default Third;
