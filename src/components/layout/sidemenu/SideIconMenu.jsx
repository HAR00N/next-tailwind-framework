"use client";

import MenuItems from "./SideMenuItems.js";
import Tooltip from "@/components/base/Tooltip.jsx";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation.js";

export default function SideIconMenu({ onChange }) {
  const [activeItem, setActiveItem] = useState(null);

  const pathname = usePathname();
  const findActiveMenu = () => {
    return MenuItems.find((menu) =>
        menu.items.some((item) => pathname.includes(item.path))
    );
  };

  useEffect(() => {
    const activeMenu = findActiveMenu(pathname);
    setActiveItem(activeMenu.name);
    onChange(activeMenu.name);
  }, []);

  const handleClick = (name) => {
    setActiveItem(name);
    onChange(name);
  };

  return (
    <aside className="bg-surface flex w-16 flex-col p-2">
      <nav className="mt-4 flex flex-col gap-2">
        {MenuItems.map((item, index) => (
          <Tooltip key={index} text={item.name} position="right">
            <button
              className={`flex h-12 items-center justify-center rounded-xl bg-transparent p-3 ${activeItem === item.name ? "active" : ""}`}
              onClick={(e) => handleClick(item.name)}
            >
              <Icon icon={item.icon} height={24} />
            </button>
          </Tooltip>
        ))}
      </nav>
    </aside>
  );
}
