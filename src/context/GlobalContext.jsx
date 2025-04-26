import React, { useState } from "react";
import { useBreakPoint } from '../hooks/useBreakPoint';

export const GlobalContext = React.createContext({
  currentTheme: "",
  themeSwitchHandler: () => { },
  currentScreenBreakPoint: 375,
});


const GlobalContextProvider = (props) => {
  
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") == null
      ? "dark"
      : window.localStorage.getItem("theme")
  );

  const currentScreenBreakPoint = useBreakPoint();

  const themeSwitchHandler = (themeType) => {
    setCurrentTheme(themeType);
  };


  return  <GlobalContext.Provider
            value={{
              theme: currentTheme,
              themeSwitchHandler: themeSwitchHandler,
              screenBreakPoint: currentScreenBreakPoint,
            }}
          >
            {props.children}
          </GlobalContext.Provider>
};

export default GlobalContextProvider;