import React, { useContext, useEffect } from "react";
import { GlobalContext } from '../../../context/GlobalContext';
import {ThemeSwitchButton} from './ThemeSwitcher.styled';


export const ThemeSwitcher = () => {

  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const onChangeTheme = () => themeSwitchHandler(theme === "dark" ? "light" : "dark");

  return  <ThemeSwitchButton >
            <input type="checkbox" onChange={onChangeTheme} name='switcher' aria-label="light and dark theme switcher"/>
            <span></span>
          </ThemeSwitchButton>;
}
