import { useEffect, useState } from "react";
import { getAssetUrl } from "../utils/getAssetUrl";

const STORAGE_KEY = "theme";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as
      | "light"
      | "dark"
      | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      return savedTheme;
    } else {
      // First visit → follow system
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";

      document.documentElement.classList.toggle("dark", systemPrefersDark);
      return initialTheme;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <img
        className="size-4 md:size-6"
        src={
          theme === "light"
            ? getAssetUrl("icon-sun-dark.svg")
            : getAssetUrl("icon-sun-light.svg")
        }
        alt=""
      />
      <button
        onClick={handleToggle}
        className={`bg-primary flex h-[1.75rem] w-12 cursor-pointer items-center rounded-full p-1`}
      >
        <div
          className={`size-5 rounded-full bg-white transition-transform duration-200 ease-in-out ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </button>
      <img
        className="size-4 md:size-6"
        src={
          theme === "light"
            ? getAssetUrl("icon-moon-dark.svg")
            : getAssetUrl("icon-moon-light.svg")
        }
        alt=""
      />
    </div>
  );
}
