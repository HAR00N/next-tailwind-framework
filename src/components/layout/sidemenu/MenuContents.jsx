"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation.js";
import NavItem from "@/components/layout/sidemenu/NavItem.jsx";
import NavGroup from "@/components/layout/sidemenu/NavGroup.jsx";
import SideMenuItems from "./SideMenuItems.js";

export default function MenuContents({ selectedIconName }) {
  const [menuItems, setMenuItems] = useState([]);
  const pathname = usePathname();
  const router = useRouter();

  const handleRoute = (path) => {
    router.push(path);
  };

  useEffect(() => {
    const selectedItem = SideMenuItems.find((item) => item.name === (selectedIconName || SideMenuItems[0].name));
    setMenuItems(selectedItem.items);
  }, [selectedIconName]);

  return (
    <nav className="mt-4 flex flex-col gap-2">
      {menuItems.map((item) =>
        item.children ? (
          <NavGroup key={item.path} group={item} pathname={pathname} handleRoute={handleRoute} />
        ) : (
          <NavItem key={item.path} item={item} pathname={pathname} handleRoute={handleRoute} />
        ),
      )}
    </nav>
  );
}
