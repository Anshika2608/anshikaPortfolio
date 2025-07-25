import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

useEffect(() => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark"); // Just remove dark class for light
  }

  localStorage.setItem("theme", theme);
}, [theme]);


   const toggleTheme = () => {
     setTheme((prev) => {
       const newTheme = prev === "dark" ? "light" : "dark";
       console.log("Toggling theme to:", newTheme);
       return newTheme;
     });
   };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
