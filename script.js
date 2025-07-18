function isSameType(value1, value2) {
  //your js code here
	  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// Example usage:
console.log(isSameType(5, 10));         // true
console.log(isSameType('a', 'b'));      // true
console.log(isSameType(5, '5'));        // false
console.log(isSameType(NaN, NaN));      // true
console.log(isSameType(NaN, 5));        // false
console.log(isSameType([], {})); 
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
