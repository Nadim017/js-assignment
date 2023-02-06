// First Problem:

function mindGame(number) {
  if (typeof number === 'number') {
    const result = (number * 3 + 10) / 2 - 5;
    return result;
  } else {
    return 'Please give number as an input';
  }
}
const result = mindGame(5);
console.log(result);

// mindGame is a function which refres that it will take a number as a input and then multiply that number with 3 then add 10 with them and divided  2 with that result and then substract 5 from the result and return the result.

// -----------------------------------------------------

// Second Problem:

function evenOdd(name) {
  if (typeof name === 'string') {
    if (name.length % 2 == 0) {
      return 'even';
    } else {
      return 'odd';
    }
  } else {
    return 'please give string as an input';
  }
}
const myName = 'Nadim';

const evenOrOdd = evenOdd(myName);
console.log(evenOrOdd);

// evenOdd is a function which take a string as an input and return whether the string is even or odd.

// -------------------------------------------------

// Third Problem:
function isLGSeven(number) {
  //   let absSubstract = Math.abs(number - 7);
  //   if (absSubstract < 7) {
  //     return absSubstract;
  //   } else {
  //     return number * 2;
  //   }

  let substract = number - 7;
  if (substract < 7) {
    return substract;
  }
}
console.log(isLGSeven(6));

// ------------------------------------------------

// Fourth problem :

function findingBadData(array) {
  if (Array.isArray(array) === true) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        count++;
      }
    }
    return count;
  } else {
    return 'Please give an array of numbers as input';
  }
}
const myArray = [1, 2, -3, 4, -5, -6, 7, -8, 9, 10];

console.log(findingBadData(myArray));

// findingBadData is a function which take an array as an input and give return how many negative values are remained in that array.

// --------------------------------------------------------------------

// fifth problem:

function gemsToDiamond(num1, num2, num3) {
  if (
    typeof num1 === 'number' &&
    typeof num2 === 'number' &&
    typeof num3 === 'number'
  ) {
    const firstFriendGemsPower = num1 * 21;
    const secondFriendGemsPower = num2 * 32;
    const thirdFriendGemsPower = num3 * 43;
    const totalGemsPower =
      firstFriendGemsPower + secondFriendGemsPower + thirdFriendGemsPower;
    if (totalGemsPower >= 2000) {
      return totalGemsPower - 2000;
    } else {
      return totalGemsPower;
    }
  } else {
    return 'please enter a number as an input';
  }
}
console.log(gemsToDiamond(20, 200, 50));
