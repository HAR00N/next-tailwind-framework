"use client";

import { useEffect, useState } from "react";
import ToggleSwitch from "@/components/base/ToggleSwitch";
import lightIcon from "@/assets/icons/light.svg";
import darkIcon from "@/assets/icons/dark.svg";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDark(savedTheme === "dark");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);

    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ToggleSwitch
      isOn={isDark}
      onToggle={toggleTheme}
      falseIcon={lightIcon}
      trueIcon={darkIcon}
      width={16}
      trueBg="#3E3E3E"
      falseBg="#E4E4E4"
    />
  );
}
