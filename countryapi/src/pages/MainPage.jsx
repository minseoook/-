import style from "./MainPage.module.css";
import data from "../data.json";
import { IoIosSearch } from "react-icons/io";
import Country from "../components/Country";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "../components/Pagination";

const MainPage = () => {
  const [country, setCountry] = useState(data);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.floor(country.length / 8) + 1;

  let last = currentPage * 8;
  let first = last - 8;
  const searchFilter = (search) => {
    if (search) {
      setCountry(
        data.filter((a) => a.name.toLowerCase() === search.toLowerCase())
      );
    }
  };
  const filtercountry = (filter) => {
    if (filter === "All") {
      setCountry(data);
      return;
    }
    setCountry(data.filter((a) => a.region === filter));
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchFilter(search);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [search]);

  useEffect(() => {
    // 검색어가 빈 문자열이면 전체 국가를 설정
    if (!search) {
      setCountry(data);
    }
  }, [search]);
  useEffect(() => {
    if (filter) {
      filtercountry(filter);
    }
  }, [filter]);
  return (
    <div className={style.container}>
      <div className={style.search}>
        <div className={style.input}>
          <IoIosSearch size={30} />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          name="country"
          className={style.select}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">대륙을 선택하시오</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={style.countrys}>
        {country.slice(first, last).map((a, i) => (
          <Country
            key={i}
            id={a.id}
            flag={a.flags.svg}
            name={a.name}
            population={a.population}
            region={a.region}
            capital={a.capital}
          />
        ))}
      </div>
      <Pagination
        total={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MainPage;
