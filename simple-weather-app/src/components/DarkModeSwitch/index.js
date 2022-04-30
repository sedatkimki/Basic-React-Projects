import { useContext } from "react";
import "./styles.css";
import ThemeContext from "../../Context/ThemeContex";

function DarkModeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={theme === "dark" ? true : false}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default DarkModeSwitch;
