// Instructions can be found in ternaries.md

export function sayHello(name?:string) {
  return name? "Hello, "+name +"!": "Hello you!";
  /*if (name === undefined) {
    return "Hello you!";
  } else return "Hello, " + name + "!";*/
}