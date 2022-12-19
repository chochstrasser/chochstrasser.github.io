import * as React from 'react';

export const themeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themeLight, setThemeLight] = React.useState(() => sessionStorage.getItem('theme-light') !== 'false');

  const onChangeTheme = (value) => {
    sessionStorage.setItem('theme-light', value);
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
