import ToggleTheme from "@/components/layout/header/ToggleTheme.jsx";
import Dropdown from "@/components/ui/Dropdown.jsx";
import Spacer from "@/components/ui/Spacer.jsx";
import { Icon } from "@iconify/react";
import Breadcrumb from "@/components/layout/header/Breadcrumb.jsx";

export default function Header() {
  const triggerButton = (
    <div className={"btn flex gap-2"}>
      <Icon icon="solar:user-bold" height={24} />
      <p>User</p>
      <Icon icon={"solar:alt-arrow-down-line-duotone"} height={20} />
    </div>
  );

  return (
    <header className="flex h-30 items-center">
      <Breadcrumb />

      <Spacer />

      <Dropdown className={"bg-surface"} trigger={triggerButton} align="right">
        <div className="flex flex-col items-center gap-5 px-6 py-4">
          <div className={"btn flex items-center"}>
            <Icon icon="solar:logout-2-line-duotone" height={24} /> <p className={"mx-2"}>logout</p>
          </div>

          <ToggleTheme />
        </div>
      </Dropdown>
    </header>
  );
}
