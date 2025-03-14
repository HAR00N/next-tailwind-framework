"use client";

import Image from "next/image";
import { useAlert } from "@/context/AlertContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { handleLoginApi } from "@/hooks/ui/handleLoginApi";
import BaseLoadingBar from "@/components/base/BaseLoadingBar.jsx";

export default function Login() {
  const { alert } = useAlert();
  const [userAccount, setUserAccount] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await handleLoginApi(userAccount, password);

      if (res.status === 200) {
        sessionStorage.setItem("userId", res.data.userId);
        router.push("/twoFactor");
      } else {
        setLoading(false);

        if (res.data.error !== undefined) {
          alert(res.data.error);
          return;
        }
      }
    } catch (err) {
      setLoading(false);
      alert(err.message);
      console.error(err);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") handleLogin();
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex flex-grow flex-col items-center justify-center">
        <div className="bg-surface flex min-h-125 w-100 flex-col items-center gap-4 rounded-xl p-10">
          <Image className="my-5 dark:invert" src="/images/main_logo.svg" alt="Logo" height={80} width={280} />

          <div className="flex w-full flex-col gap-2">
            <p>ID</p>
            <input
              type="text"
              className="input-form w-full"
              onKeyUp={handleKeyUp}
              onChange={(e) => setUserAccount(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <p>Password</p>
            <input
              type="password"
              className="input-form w-full"
              onKeyUp={handleKeyUp}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-auto w-full">
            <button onClick={handleLogin} className="my-5 h-14 w-full bg-[#5D87FF] text-xl text-white">
              Sign In
            </button>
          </div>
        </div>
      </main>

      {loading && <BaseLoadingBar loading={loading} />}
    </div>
  );
}
