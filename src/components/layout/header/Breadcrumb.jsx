import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation.js";
import { Icon } from "@iconify/react";
import MenuItems from "../sidemenu/SideMenuItems.js";
import React from "react";

export default function Breadcrumb() {
  const pathname = usePathname(); // 현재 경로 가져오기
  const router = useRouter();

  const handleRoute = (path) => {
    if (!path) return;
    router.push(path);
  };

  const findActiveMenu = () => {
    const menuArray = [];
    const pushMenuArray = (_name, _path) => {
      menuArray.push({ name: _name, path: _path });
    };

    const iconMenu = MenuItems.find((menu) => menu.items.some((item) => pathname.includes(item.path)));
    if (!iconMenu) return;
    pushMenuArray(iconMenu.name, null);

    const menuItem = iconMenu?.items.find((menu) => pathname.includes(menu.path));
    if (!menuItem) return;
    pushMenuArray(menuItem.name, menuItem.path);

    const subMenuItem = menuItem?.children?.find((menu) => pathname === menu.path);
    if (subMenuItem) pushMenuArray(subMenuItem.name, subMenuItem.path);

    return menuArray;
  };

  const activeMenu = findActiveMenu();

  return (
    <nav className="flex justify-center text-sm">
      {activeMenu.map((menu, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <Icon className="mx-2" icon={"solar:alt-arrow-right-linear"} height={20} />}

          {activeMenu.length - 1 !== index ? (
            <a className={"text-gray-400"}>{menu.name}</a>
          ) : (
            <a onClick={() => handleRoute(menu.path)} className={"cursor-pointer hover:underline"}>
              {menu.name}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
