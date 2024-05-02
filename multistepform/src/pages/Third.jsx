import { useNavigate } from "react-router-dom";
import style from "./Third.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart2 } from "../store/slice/cartSlice";
const Third = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [selected, setselected] = useState(cart);
  const navigate = useNavigate();

  console.log(selected);
  const handlePrev = () => {
    navigate("/2");
  };
  const handleNext = () => {
    dispatch(addToCart2(selected));
    navigate("/4");
  };
  const handleChange1 = (e) => {
    const checked = e.target.checked; //true / false
    const name = e.target.name;

    if (checked) {
      setselected([...selected, { [name]: 1 }]);
    } else {
      const arr = selected.filter((a) => a["온라인서비스2"] !== 1);

      setselected(arr);
    }
  };

  const handleChange2 = (e) => {
    const checked = e.target.checked; //true / false
    const name = e.target.name;

    if (checked) {
      setselected([...selected, { [name]: 2 }]);
    } else {
      const arr = selected.filter((a) => a["온라인서비스3"] !== 2);

      setselected(arr);
    }
  };
  const handleChange3 = (e) => {
    const checked = e.target.checked; //true / false
    const name = e.target.name;

    if (checked) {
      setselected([...selected, { [name]: 4 }]);
    } else {
      const arr = selected.filter((a) => a["온라인서비스4"] !== 4);

      setselected(arr);
    }
  };
  return (
    <div className={style.container}>
      <div style={{ flex: "1" }}>
        <h1>추가 서비스</h1>
        <p>원하는 추가 서비스를 골라주세요</p>
        <div className={style.services}>
          <div className={style.service}>
            <div className={style.check}>
              <input
                type="checkbox"
                onChange={handleChange1}
                checked={
                  selected.filter((a) => a["온라인서비스2"] === 1).length === 1
                }
                name="온라인서비스2"
              />
              <div className={style.desc}>
                <span>온라인 서비스2</span>
                <span>온라인 서비스2를 이용해 보세요</span>
              </div>
            </div>
            <div className={style.price}>1원/한달</div>
          </div>

          <div className={style.service}>
            <div className={style.check}>
              <input
                type="checkbox"
                onChange={handleChange2}
                checked={
                  selected.filter((a) => a["온라인서비스3"] === 2).length === 1
                }
                name="온라인서비스3"
              />
              <div className={style.desc}>
                <span>온라인 서비스3</span>
                <span>온라인 서비스3를 이용해 보세요</span>
              </div>
            </div>
            <div className={style.price}>2원/한달</div>
          </div>

          <div className={style.service}>
            <div className={style.check}>
              <input
                type="checkbox"
                onChange={handleChange3}
                checked={
                  selected.filter((a) => a["온라인서비스4"] === 4).length === 1
                }
                name="온라인서비스4"
              />
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
