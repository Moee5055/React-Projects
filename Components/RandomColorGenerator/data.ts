export const HexValue = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

export const randomValueGenerator = () => {
  let a = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  let c = Math.floor(Math.random() * 255 + 1);

  return [a, b, c];
};
