function isSameType(value1, value2) {
  //your js code here
	 if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return false;
}

// Test cases
console.log(isSameType(1, 3));           // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN));       // true
console.log(isSameType("3", 3));         // false
console.log(isSameType(NaN, 5)); 
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
