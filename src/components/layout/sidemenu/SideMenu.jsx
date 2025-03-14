import Image from "next/image";
import MenuContents from "@/components/layout/sidemenu/MenuContents.jsx";
import SideIconMenu from "@/components/layout/sidemenu/SideIconMenu.jsx";
import { useState } from "react";

export default function SideMenu({ isMenuVisible, setIsMenuVisible }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className="flex">
      <SideIconMenu onChange={setSelectedIcon} onToggleMenu={handleMenuToggle} />

      <aside className={`side-menu ${isMenuVisible ? "open" : "closed"}`}>
        <div className="my-5 flex items-center justify-center">
          <Image className="dark:invert" src="/images/logo_v_white.svg" alt="logo" height={100} width={120} priority />
        </div>

        <MenuContents selectedIconName={selectedIcon} />
      </aside>
    </div>
  );
}
