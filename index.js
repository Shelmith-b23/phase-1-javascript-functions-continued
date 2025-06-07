// Basic function examples
function razzle() {
  console.log("You've been razzled!");
}

razzle();
razzle();

function razzleWithArgs(lawyer = "Billy", target = "'em") {
  console.log(`${lawyer} razzle-dazzles ${target}!`);
}

razzleWithArgs();
razzleWithArgs("Methuselah", "T'challah");

// Simple expressions
1 + 1;
"Razzle " + "dazzle!";

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Yet more razzling");
})();

// Function expression assigned to a variable
const fn = function () {
  console.log("Yet more razzling");
};

fn();

// IIFE with argument
(function (baseNumber) {
  console.log(baseNumber + 3);
})(2);

// Closure example with nested functions
function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

console.log(outer("Hello")("student", "JavaScript"));

const storedFunction = outer("Hello");
console.log(storedFunction("student", "JavaScript"));

// Another closure example
const array = (function (thingToAdd) {
  const base = 3;
  return [
    function () {
      return base + thingToAdd;
    },
    function () {
      return base;
    },
  ];
})(2);

console.log(array[0]()); // 5
console.log(array[1]()); // 3

// Chain of functions (currying)
function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}

demoChain("Dr. Stephen Strange")()();

// SATURDAY FUNCTION
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// MONDAY FUNCTION
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// WRAP ADJECTIVE FUNCTION
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));
console.log(mondayWork());
console.log(mondayWork("work from home"));
console.log(wrapAdjective("%")("a dedicated programmer"));

