"use client";

import Image from "next/image";
import { useAlert } from "@/context/AlertContext";
import { useState } from "react";

export default function TwoFactor() {
  const { alert, confirm } = useAlert();
  const [code, setCode] = useState(Array(6).fill(""));

  const handleAlert = () => {
    alert("This is a test alert", () => {});
  };
  const handleConfirm = () => {
    confirm("This is the test confirm", (isConfirm) => {
      alert(String(isConfirm));
    });
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    const valueArr = String(value).split("");

    valueArr.forEach((digit, arrIdx) => {
      if (index + arrIdx <= 5) {
        newCode[index + arrIdx] = parseInt(digit);
        setCode(newCode);
      }
      if (index + arrIdx < 5) {
        document.getElementById(`digit-${index + arrIdx + 1}`).focus();
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex flex-grow flex-col items-center justify-center">
        <div className="bg-surface flex min-h-125 w-100 flex-col items-center gap-4 rounded-xl p-10">
          <Image className="my-5 dark:invert" src="/images/main_logo.svg" alt="Logo" height={80} width={280} />

          <div className="text-caption w-full text-center text-sm">
            <span>
              We sent a verification code to your email.
              <br />
              Enter the code from the email in the field below.
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <span className="text-sm">Type your 6 digits security code</span>
            <div className="flex w-full gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="number"
                  className="h-13 w-full rounded-md border-1 px-2 py-2 text-center text-xl"
                  id={`digit-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto w-full">
            <button onClick={handleAlert} className="my-5 h-14 w-full bg-[#5D87FF] text-xl text-white">
              Verify My Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
