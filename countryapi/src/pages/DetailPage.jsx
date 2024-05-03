import style from "./DetailPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import data from "../data.json";
const DetailPage = () => {
  const location = useLocation();
  const n = location.pathname.split("/")[1];
  const navigate = useNavigate();

  const selectedCountry = data.filter((a) => a.id === +n);
  const lang = selectedCountry[0].languages.map((a) => a.name).join(" ");
  //alpha3Code
  const borders = selectedCountry[0].borders ? selectedCountry[0].borders : [];
  const findCountryNameByAlpha3Code = (code) => {
    const country = data.find((country) => country.alpha3Code === code);
    return country ? country.name : "";
  };

  const countryNames = borders.map((code) => findCountryNameByAlpha3Code(code));
  console.log(countryNames);
  return (
    <div className={style.detail}>
      <div className={style.container}>
        <div className={style.button} onClick={() => navigate("/")}>
          <GrFormPreviousLink size={30} />
          <span>뒤로 가기</span>
        </div>

        <div className={style.country}>
          <img src={selectedCountry[0].flags.png} />
          <div className={style.descs}>
            <h3>{selectedCountry.name}</h3>
            <div className={style.desc}>
              <div className={style.left}>
                <span>{`인구 : ${selectedCountry[0]?.population}`}</span>
                <span>{`대륙 : ${selectedCountry[0]?.region}`}</span>
                <span>{`수도 : ${selectedCountry[0]?.capital}`}</span>
              </div>
              <div className={style.right}>
                <span>{`도메인 : ${selectedCountry[0]?.topLevelDomain[0]}`}</span>
                <span>{`언어 : ${lang}`}</span>
              </div>
            </div>
            <div className={style.bottom}>
              <span>인접국가</span>
              <div className={style.aaa}>
                {countryNames.length > 0
                  ? countryNames.map((countryName, i) => (
                      <div key={i} className={style.abs}>
                        {countryName}
                      </div>
                    ))
                  : "인접국가가 없다"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
