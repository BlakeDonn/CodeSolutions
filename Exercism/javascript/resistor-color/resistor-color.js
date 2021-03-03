//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
    let value = color;
    const firstLetter = value[0].toUpperCase();
    value = value.substring(1,value.length);
    value = firstLetter + value;
    return COLORS.indexOf(value);
  };

export const COLORS = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];
