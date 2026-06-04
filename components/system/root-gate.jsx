"use client";

import { useEffect, useState } from "react";
import { getDecay, increaseDecay } from "@/lib/decay";

// utils
const rand = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const delay = (min, max) =>
  new Promise((res) => setTimeout(res, rand(min, max)));

export default function RootGate({ children }) {
  const [ready, setReady] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const [offline, setOffline] = useState(false);

  // 🔻 FIRST LOAD
  useEffect(() => {
    delay(6000, 12000).then(() => setReady(true));
  }, []);

  // 🔥 SESSION DECAY
  useEffect(() => {
    const interval = setInterval(() => {
      increaseDecay();

      console.log("Decay Level:", getDecay());
    }, 15000); // every 15 sec worse

    return () => clearInterval(interval);
  }, []);

  // 🔻 FREEZE SYSTEM
  useEffect(() => {
    let active = true;

    const loop = async () => {
      while (active) {
        const decay = getDecay();

        // more decay = more freeze
        await delay(
          Math.max(2000, 6000 - decay * 300),
          Math.max(4000, 9000 - decay * 300)
        );

        setFreeze(true);

        await delay(
          2000 + decay * 400,
          5000 + decay * 600
        );

        setFreeze(false);
      }
    };

    loop();

    return () => {
      active = false;
    };
  }, []);

  // 🔻 SCROLL LAG
  useEffect(() => {
    let locked = false;

    const handleWheel = (e) => {
      const decay = getDecay();

      if (locked) {
        e.preventDefault();
        return;
      }

      // higher decay = more lag
      const lagChance = Math.min(0.3 + decay * 0.08, 0.95);

      if (Math.random() < lagChance) {
        e.preventDefault();

        locked = true;

        const scrollAmount = e.deltaY;

        setTimeout(() => {
          window.scrollBy({
            top: scrollAmount,
            behavior: "smooth",
          });

          locked = false;
        }, rand(
          1000 + decay * 1000,
          3000 + decay * 2000
        ));
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // 🔻 MOBILE TOUCH LAG
  useEffect(() => {
    let locked = false;

    const handleTouch = (e) => {
      const decay = getDecay();

      if (locked) {
        e.preventDefault();
        return;
      }

      const lagChance = Math.min(0.25 + decay * 0.07, 0.9);

      if (Math.random() < lagChance) {
        e.preventDefault();

        locked = true;

        setTimeout(() => {
          locked = false;
        }, rand(
          1000 + decay * 1000,
          4000 + decay * 2000
        ));
      }
    };

    window.addEventListener("touchmove", handleTouch, {
      passive: false,
    });

    return () => {
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  // 🔻 FAKE OFFLINE
  useEffect(() => {
    const interval = setInterval(() => {
      const decay = getDecay();

      const chance = Math.min(0.1 + decay * 0.05, 0.8);

      if (Math.random() < chance) {
        setOffline(true);

        setTimeout(() => {
          setOffline(false);
        }, rand(3000, 8000));
      }
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  // 🔻 LOADING SCREEN
  if (!ready) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading resources...
      </div>
    );
  }

  return (
    <div
      className={freeze ? "pointer-events-none opacity-90" : ""}
    >
      {/* OFFLINE BANNER */}
      {offline && (
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center py-2 z-[9999] text-sm">
          Network connection lost. Reconnecting...
        </div>
      )}

      {children}
    </div>
  );
}