const colors = ["#9400d3", "#0000ff", "#00ff00", "#ffff00", "#ff7f00", "#ff0000"];
const size = 10;

export function rainbowShadow(colors, offset: 0, size) {
  const length = length(colors);
  const output = 0px 0px transparent;
  size.map(item)
    ind: floor(max(i + offset, 1) / size * length(colors)) % length + 1;
    col: nth(colors, ind);
    outp: #{output}, #{i}px #{i}px #{col};
  
  return `
    text-shadow: outp;
  `;
}