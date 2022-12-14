// Instructions can be found in rest_parameters.md

function add(...args) {
  //export function add(a, b) {
  // Add a loop here
  let total = 0;
  for (const arg of args) total += arg;
  return total;
}

add(1, 2, 3, 4, 5);

module.exports = add;
