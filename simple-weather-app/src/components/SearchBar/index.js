import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import ThemeContext from "../../Context/ThemeContex";

import axios from "axios";

function SearchBar({ setData, setIsLoading }) {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const onSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}/next7days?unitGroup=metric&include=days&key=3JRGL6H25YESVC9HQ6HJVE9R8&contentType=json`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <div
          className={
            theme === "light"
              ? `${styles.input_field}`
              : `${styles.input_field} ${styles.dark}`
          }
        >
          <input
            value={search}
            autoComplete="off"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button href="#" type="submit">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
