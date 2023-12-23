// Setup
function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));

// Setup
function compareEqualityS(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEqualityS(10, "10"));
