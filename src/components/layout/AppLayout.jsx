"use client";

import Header from "@/components/layout/Header.jsx";
import SideMenu from "@/components/layout/SideMenu.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <SideMenu />

      <div className="flex flex-grow flex-col">
        <Header />

        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
