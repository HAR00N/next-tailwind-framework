import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function BaseDialog({ children, open, onClose, className }) {
  const [isVisible, setIsVisible] = useState(open);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [open]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity ${
        isAnimating ? "animate-fadeIn opacity-100" : "animate-fadeOut opacity-0"
      }`}
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className={`${className} bg-background relative z-10 min-w-80 rounded-2xl p-6 shadow-lg transition-transform ${
          isAnimating ? "animate-scaleIn scale-100" : "animate-scaleOut scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button className="absolute top-4 right-4 p-1 transition" onClick={onClose}>
          <Icon icon={"mdi:close"} height={28} />
        </button>
      </div>
    </div>
  );
}
