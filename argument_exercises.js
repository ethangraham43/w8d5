const sum3 = function (args) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
  // arguments.forEach(function(num) {
  //     sum += num
  // })
  // return sum
};

const sumRest = function (...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

// console.log(sumRest(1, 2, 3, 4) === 10);
// console.log(sumRest(1, 2, 3, 4, 5) === 15);

// const myBindBad = function (...args) {
//   return function () {
//     this.apply(args);
//   };
// };

Function.prototype.myBind1 = function (context) {
  let that = this;
  let bindArgs = Array.from(arguments).slice(1);
  return function boundFunc() {
    const callArgs = Array.from(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (context, ...bindArgs) {
    let that = this;
    return function boundFunc(...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs) )
    }
}

Array.from(arguments);
// Function.prototype.myBind = function (context) {
//   return () => this.apply(context);
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind2(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind2(pavlov)("meow", "a tree");
// // // Pavlov says meow to a tree!
// // // true

// // // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(pavlov, "meow")("Markov");
// // // Pavlov says meow to Markov!
// // // true

// // // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");
// // // Pavlov says meow to me!
// // // true

const curriedSum = function(numArgs) {
    let numbers = [];
    return function _curriedSum(num) {
        let sum = 0;
        numbers.push(num)
        if (numbers.length === numArgs) {

            numbers.forEach(function(ele){
                sum += ele;
            })
            return sum;
        }
        return _curriedSum;
    }
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
