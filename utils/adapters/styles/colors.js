import { GetGradientDirection } from './directions';

export function hexToRgbA(hex, opacity = 1) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      `,${opacity})`
    );
  }
  throw new Error('Bad Hex');
}

export const GetGradient = ({ colors = [], direction }) => {
  const gradient_direction = GetGradientDirection(direction);
  let colors_string = ''
  
  colors.forEach((color, idx) => {
    const color_space_percentage = (100 / (colors.length - 1)) * idx 

    colors_string += `, ${color}${color_space_percentage ? ` ${color_space_percentage}%` : ''}`
  })

  return `linear-gradient(${gradient_direction}${colors_string});`
};
