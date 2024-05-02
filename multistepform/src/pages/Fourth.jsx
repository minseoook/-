import { useSelector } from "react-redux";
import style from "./Fouth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ThankYou from "../components/ThankYou";

const Fourth = () => {
  const { cart } = useSelector((state) => state);
  const total = cart.reduce((a, b) => a + +Object.values(b), 0);
  const [isFinish, setisFinish] = useState(false);

  const navigate = useNavigate();
  const handlePrev = () => {
    navigate("/3");
  };
  const handleNext = () => {
    setisFinish(true);
  };
  console.log(total);
  if (isFinish) {
    return <ThankYou />;
  }
  return (
    <div className={style.container}>
      <div style={{ flex: "1" }}>
        <h1>주문표</h1>
        <p>고객님이 주문하신 주문 목록입니다</p>
        <div className={style.lists}>
          {cart.map((cart, i) => {
            return (
              <div key={i} className={style.list}>
                <span>{Object.keys(cart).join("")}</span>
                <span>{Object.values(cart)}원</span>
              </div>
            );
          })}
        </div>
        <div className={style.total}>
          <span>전체 금액</span>
          <span className={style.price}>{total}원</span>
        </div>
        <Link to={"/2"} className={style.change}>
          주문서 변경하기
        </Link>
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

export default Fourth;
