let input = [1, 2, 3, [[4], 5], [[[6]]]]

function flatten(items) {
  const flat = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });
  return flat;
}
flatten(input)
