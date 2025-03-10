"use client";
import Image from "next/image";

export default function ToggleSwitch({
  isOn,
  onToggle,
  trueIcon = null,
  falseIcon = null,
  trueBg = "#869bdd",
  falseBg = "#d1d5dc",
}) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" checked={isOn} onChange={onToggle} className="peer sr-only" />
      <div
        className={`relative h-8 w-17 rounded-full transition-all`}
        style={{ backgroundColor: isOn ? trueBg : falseBg }}
      >
        <span
          className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow transition-transform ${isOn ? "translate-x-9" : "translate-x-0"}`}
        >
          {isOn && trueIcon ? <Image src={trueIcon} alt="토글 아이콘" width={18} height={18} /> : null}
          {!isOn && falseIcon ? <Image src={falseIcon} alt="토글 아이콘" width={18} height={18} /> : null}
        </span>
      </div>
    </label>
  );
}
