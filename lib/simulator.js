// lib/simulator.js

export const delay = (min = 2000, max = 6000) => {
  const time = Math.floor(Math.random() * (max - min)) + min;
  return new Promise((res) => setTimeout(res, time));
};

// random failure
export const unreliable = async (fn, failRate = 0.4) => {
  await delay(1500, 5000);

  if (Math.random() < failRate) {
    throw new Error("Network Error");
  }

  return fn();
};

// randomly hide components (controlled)
export const shouldRender = (probability = 0.7) => {
  return Math.random() < probability;
};