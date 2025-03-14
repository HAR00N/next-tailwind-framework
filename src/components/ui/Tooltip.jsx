import { useState } from "react";
import "@/app/css/components/tooltip.css";

export default function Tooltip({ children, text, position = "right" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && <div className={`tooltip tooltip-${position}`}>{text}</div>}
    </div>
  );
}
