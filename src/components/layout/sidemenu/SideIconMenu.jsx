import MenuItems from "./SideMenuItems.js";
import Tooltip from "@/components/ui/Tooltip.jsx";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation.js";

export default function SideIconMenu({ onChange, onToggleMenu }) {
  const [activeItem, setActiveItem] = useState(null);

  const pathname = usePathname();
  const findActiveMenu = () => {
    return MenuItems.find((menu) => menu.items.some((item) => pathname.includes(item.path)));
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
    <aside className="side-icon-menu bg-surface z-10 flex w-16 flex-col items-center p-2 pt-8">
      <button onClick={onToggleMenu}>
        <Icon icon="solar:hamburger-menu-line-duotone" height={24} />
      </button>

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
