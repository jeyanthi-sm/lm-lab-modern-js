// Instructions can be found in rest_parameters.md

function add(...args) {
  let total = 0;
  for (const arg of args) total += arg;
  return total;
}

add(1, 2, 3, 4, 5);

export  {add};

