"use client";

let decayLevel = 0;

export const getDecay = () => decayLevel;

export const increaseDecay = () => {
  decayLevel += 1;
};

export const resetDecay = () => {
  decayLevel = 0;
};