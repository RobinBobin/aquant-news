export function getRandomColor() {
  const hexDigits = "0123456789ABCDEF";
  
  const result = [];
  
  for (let i = 0; i < 6; i++) {
    result.push(hexDigits[random(0, hexDigits.length, true)]);
  }
  
  return `#${result.join("")}`;
};

function random(min, max, round, maxInclusive) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  
  const mn = round ? Math.ceil(min) : min;
  const mx = round ? Math.floor(max) : max;
  const rnd = Math.random() * (mx - mn + (round && maxInclusive ? 1 : 0));
  
  return (round ? Math.floor(rnd) : rnd) + mn;
}
