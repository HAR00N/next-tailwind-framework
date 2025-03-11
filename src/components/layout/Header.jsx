"use client";

import ToggleTheme from "@/components/layout/ToggleTheme.jsx";

export default function Header() {
  return (
    <header className="flex h-16 items-center px-6">
      <ToggleTheme />
    </header>
  );
}
