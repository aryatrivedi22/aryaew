export const PROFILE = {
  firstPaint: [6000, 12000],   // initial blank/loader
  pageDelay: [5000, 10000],    // page-level delay
  navDelay: [10000, 20000],    // navigation delay
  renderChance: 0.65,          // section visible
  contentChance: 0.7,          // text visible
  imageChance: 0.7,            // image loads
  buttonChance: 0.5,           // button works
  failChance: 0.35,            // section error
};

export const rand = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const delay = (min, max) =>
  new Promise((r) => setTimeout(r, rand(min, max)));

export const chance = (p) => Math.random() < p;