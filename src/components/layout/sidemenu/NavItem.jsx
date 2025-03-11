"use client";
import { Icon } from "@iconify/react";

export default function NavItem({ item, pathname, handleRoute }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-md bg-transparent px-3 py-2 text-left ${pathname === item.path ? "active" : ""}`}
      onClick={() => handleRoute(item.path)}
    >
      {item.icon ? (
        <>
          <Icon icon={item.icon} height={24} />
          <span>{item.name}</span>
        </>
      ) : (
        <span className="pl-4">ㆍ {item.name}</span>
      )}
    </button>
  );
}
