import Header from "@/components/layout/header/Header.jsx";
import SideMenu from "@/components/layout/sidemenu/SideMenu.jsx";
import { useState } from "react";
import PropTypes from "prop-types";
import BaseTable from "@/components/base/BaseTable.jsx";

export default function Layout({ children, boxLayout = false }) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  return (
    <div className="flex h-screen">
      <SideMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />

      <div className={`page-wrapper ${isMenuVisible ? "page-default" : "page-expand"}`}>
        <Header />

        <main className={`${boxLayout ? "w-300" : "w-full"} mx-auto w-300 flex-grow py-6`}>{children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  boxLayout: PropTypes.bool,
};
Layout.defaultProps = {
  boxLayout: false,
};
