import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import DarkModeSwitch from "./components/DarkModeSwitch";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./Context/ThemeContex";

import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/İstanbul/next7days?unitGroup=metric&include=days&key=3JRGL6H25YESVC9HQ6HJVE9R8&contentType=json"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={"App " + theme}>
      <div className="content-wrapper">
        <header className="city-name">
          <h1>{data && data.address}</h1>
          <div className="comp">
            <DarkModeSwitch />
            <SearchBar setData={setData} setIsLoading={setIsLoading} />
          </div>
        </header>

        <div className="card-wrapper">
          {isLoading ? (
            <div className="loader-wrapper">
              <div className={"loader " + theme}></div>
            </div>
          ) : (
            data.days
              .slice(0, 5)
              .map((day, key) => <WeatherCard key={key} data={day} />)
          )}
        </div>
        <h2 className="App-header">Simple Weather App</h2>
      </div>
    </div>
  );
}

export default App;
