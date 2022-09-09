const add = () => {
  let number = 0;
  return function () {
    number = number + 1;
    return number;
  };
};

const addNumber = add();

console.log(addNumber());
console.log(addNumber());
number = "jkshdjks";
console.log(addNumber());
console.log(addNumber());
console.log(addNumber());
console.log(addNumber());


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
