// Instructions can be found in default_parameters.md

export const sayHello = (person) => {
  return person ? "Hello, " + person+"!" :"Hello, you!"; 
 // return `Hello, ${person === undefined ? "you!" : person + "!"}`;
};
