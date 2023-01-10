// Instructions can be found in destructuring_arrays.md

export function sequence(order:any):string {
  //const first = order[0];
  //const second = order[1];
  //const third = order[2];
  const [first, second, third] = order;
  return first + ", " + second + ", " + third;
}