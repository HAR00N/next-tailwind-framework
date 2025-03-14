"use client";

import LoadingSpinner from "@/components/ui/LoadingSpinner.jsx";
import { useRouter } from "next/navigation.js";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
