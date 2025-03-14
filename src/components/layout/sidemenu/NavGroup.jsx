import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import NavItem from "./NavItem.jsx";

export default function NavGroup({ group, pathname, handleRoute }) {
  const [isOpen, setIsOpen] = useState(pathname.includes(group.path));
  const contentRef = useRef(null);

  useEffect(() => {
    setIsOpen(pathname.includes(group.path));
  }, [pathname]);

  return (
    <div className="nav-group">
      <button
        className={`flex w-full items-center gap-2 rounded-md bg-transparent px-3 py-2 text-left transition-colors ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon={group.icon} height={24} />
        <span>{group.name}</span>

        <Icon
          className="ml-auto transition-transform duration-300"
          icon={isOpen ? "solar:alt-arrow-up-bold" : "solar:alt-arrow-down-bold"}
          height={20}
        />
      </button>

      <div
        ref={contentRef}
        className="flex flex-col gap-2 overflow-hidden pt-2 transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {group.children?.map((item) => (
          <NavItem key={item.path} item={item} pathname={pathname} handleRoute={handleRoute} />
        ))}
      </div>
    </div>
  );
}
