"use client";

import Image from "next/image";
import { useAlert } from "@/context/AlertContext";

export default function Login() {
  const { alert, confirm } = useAlert();

  const handleAlert = () => {
    alert("This is a test alert", () => {});
  };
  const handleConfirm = () => {
    confirm("This is the test confirm", (isConfirm) => {
      alert(String(isConfirm));
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex flex-grow flex-col items-center justify-center">
        <div className="bg-surface flex min-h-125 w-100 flex-col items-center gap-4 rounded-xl p-10">
          <Image className="my-5 dark:invert" src="/images/main_logo.svg" alt="Logo" height={80} width={280} />

          <div className="flex w-full flex-col gap-2">
            <p>ID</p>
            <input className="w-full rounded-md border-1 px-2 py-3" type="text" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <p>Password</p>
            <input className="w-full rounded-md border-1 px-2 py-3" type="text" />
          </div>

          <div className="mt-auto w-full">
            <button onClick={handleAlert} className="my-5 h-14 w-full bg-[#5D87FF] text-xl text-white">
              Sign In
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
