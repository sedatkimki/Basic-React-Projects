import { useEffect, useContext } from "react";
import styles from "./styles.module.css";
import ConditionSVG from "../../icons/conditions";
import ThemeContext from "../../Context/ThemeContex";

function WeatherCard({ data }) {
  const { theme } = useContext(ThemeContext);
  const infos = {
    date: new Date(data.datetime).toDateString().split(" ")[0],
    temp: Math.floor(data.temp),
    max: Math.floor(data.tempmax),
    min: Math.floor(data.tempmin),
    condition: data.conditions,
    icon: data.icon.replace(/-/g, ""),
  };

  return (
    <div
      className={
        theme === "light" ? `${styles.Card}` : `${styles.Card} ${styles.dark}`
      }
    >
      <h2>{infos.date}</h2>
      <img src={ConditionSVG[infos.icon]} alt="" />

      <p>{infos.temp}&#176;</p>
      <h3>{infos.condition}</h3>
      <div className={styles.m}>
        <span>Min {infos.min}&#176;</span>
        <span>Max {infos.max}&#176;</span>
      </div>
    </div>
  );
}

export default WeatherCard;
