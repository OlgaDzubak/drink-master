import React, { useState } from "react";

export const GlobalContext = React.createContext({
  currentTheme: "",
  themeSwitchHandler: () => {},
});


const GlobalContextProvider = (props) => {
  
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") == null
      ? "dark"
      : window.localStorage.getItem("theme")
  );


  const themeSwitchHandler = (themeType) => {
    console.log('themeSwitchHandler');
    setCurrentTheme(themeType);
  };

  return  <GlobalContext.Provider
            value={{
              theme: currentTheme,
              themeSwitchHandler: themeSwitchHandler,
            }}
          >
            {props.children}
          </GlobalContext.Provider>
};

export default GlobalContextProvider;