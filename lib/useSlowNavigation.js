// lib/useSlowNavigation.js
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { delay } from "./simulator";

export default function useSlowNavigation() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const push = async (url) => {
    setLoading(true);

    await delay(8000, 20000); // 🔥 10–20 sec lag

    router.push(url);
  };

  return { push, loading };
}