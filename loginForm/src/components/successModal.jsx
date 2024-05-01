import "./successModal.css";
import imgicon from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";

const SuccessModal = () => {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <img src={imgicon} />
      <h1>구독 완료되었습니다</h1>
      <p>이제 메인화면으로 이동해주세요 이동해주세요 이동해주세요</p>
      <button className="button" onClick={() => navigate("/main")}>
        메인으로 가기
      </button>
    </div>
  );
};

export default SuccessModal;
