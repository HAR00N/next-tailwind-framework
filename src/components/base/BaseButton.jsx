import { Icon } from "@iconify/react";

const colorMap = {
  primary: "text-white bg-primary",
  secondary: "text-white bg-secondary",
  success: "text-white bg-success",
  warning: "text-white bg-warning",
  error: "text-white bg-error",
  neutral: "text-text-2 bg-surface",
};

const BaseButton = ({ children, className, icon, color = "primary", onClick = () => {}, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-10 min-w-20 items-center justify-center rounded-lg px-3 transition ${colorMap[color]}`}
      disabled={disabled}
    >
      {icon && <Icon className="mr-1" icon={icon} height={18} />}
      <span className={`${className || ""} ${icon ? "mr-1" : ""}`}>{children}</span>
    </button>
  );
};

export default BaseButton;
