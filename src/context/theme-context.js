import React, { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeLight, setThemeLight] = useState(
    () => sessionStorage.getItem("theme-light") !== "false"
  );

  const onChangeTheme = (value) => {
    sessionStorage.setItem("theme-light", value);
    setThemeLight(value);
  };

  return (
    <themeContext.Provider
      value={{
        themeLight,
        onChangeTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
