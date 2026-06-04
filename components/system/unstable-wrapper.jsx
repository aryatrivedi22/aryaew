"use client";

import { useEffect, useState } from "react";

// utils
const rand = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const delay = (min, max) =>
  new Promise((res) => setTimeout(res, rand(min, max)));

const chance = (p) => Math.random() < p;

export default function UnstableWrapper({ children }) {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState(false);
  const [freeze, setFreeze] = useState(false);

  // 🔻 initial delay
  useEffect(() => {
    delay(2000, 7000).then(() => setReady(true));
  }, []);

  // 🔻 random visibility (component missing)
  useEffect(() => {
    setVisible(chance(0.75));
  }, []);

  // 🔻 random failure
  useEffect(() => {
    if (chance(0.3)) {
      setError(true);
    }
  }, []);

  // 🔻 random freeze loop
  useEffect(() => {
    const loop = async () => {
      while (true) {
        await delay(4000, 9000);
        setFreeze(true);
        await delay(2000, 5000);
        setFreeze(false);
      }
    };
    loop();
  }, []);

  // ❌ component missing
  if (!visible) return null;

  // ⏳ loading
  if (!ready) {
    return (
      <div className="text-gray-400 text-sm p-4">
        Loading section...
      </div>
    );
  }

  // ⚠️ error
  if (error) {
    return (
      <div className="text-red-400 text-sm p-4">
        Failed to load content
      </div>
    );
  }

  return (
    <div className={freeze ? "pointer-events-none opacity-90" : ""}>
      {children}
    </div>
  );
}