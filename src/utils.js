//return a css variable given an n number color
export const color = (n) => `var(--color-${n})`;
//return a random int between a specified min and max
export const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//return a random index of an array
export const randomIndex = (arr) => Math.floor(Math.random()*arr.length);

