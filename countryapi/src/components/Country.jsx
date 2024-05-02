import style from "./Country.module.css";
import { Link } from "react-router-dom";
const Country = ({ flag, name, population, region, capital, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className={style.container}>
        <img src={flag} />
        <div className={style.desc}>
          <h5>{name}</h5>
          <span>{`인구수 : ${population}`}</span>
          <span>{`대륙 : ${region}`}</span>
          <span>{`수도 : ${capital}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default Country;
