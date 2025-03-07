"use client";
import { useState } from "react";
import Image from "next/image";

export default function ToggleSwitch({
  isOn,
  onToggle,
  trueIcon = null,
  falseIcon = null,
  trueBg = "bg-gray-700",
  falseBg = "bg-gray-300",
}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={isOn} onChange={onToggle} className="sr-only peer" />
      <div className={`w-17 h-8 ${isOn ? trueBg : falseBg} rounded-full transition-all relative`}>
        <span
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow transition-transform ${isOn ? "translate-x-9" : "translate-x-0"}`}
        >
          {isOn && trueIcon ? <Image src={trueIcon} alt="토글 아이콘" width={18} height={18} /> : null}
          {!isOn && falseIcon ? <Image src={falseIcon} alt="토글 아이콘" width={18} height={18} /> : null}
        </span>
      </div>
    </label>
  );
}
