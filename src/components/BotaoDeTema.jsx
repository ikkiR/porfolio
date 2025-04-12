import { useState } from "react";

export default function BotaoDeTema() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className={`w-24 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-16" : "translate-x-0"
        }`}
      />
    </div>
  );
}