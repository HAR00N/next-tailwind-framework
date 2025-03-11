"use client";

import Image from "next/image";
import MenuContents from "@/components/layout/sidemenu/MenuContents.jsx";
import SideIconMenu from "@/components/layout/sidemenu/SideIconMenu.jsx";
import { useState } from "react";

export default function SideMenu() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="flex">
      <SideIconMenu onChange={setSelectedIcon} />

      <aside className="flex w-64 flex-col p-4 shadow-md dark:shadow-white/8">
        <div className="my-5 flex items-center justify-center">
          <Image className="dark:invert" src="/images/logo_v_white.svg" alt="logo" height={100} width={120} />
        </div>

        <MenuContents selectedIconName={selectedIcon} />
      </aside>
    </div>
  );
}
